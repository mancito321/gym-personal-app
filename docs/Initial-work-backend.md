# Initial Backend Spec

## Goal

Build the first working backend for the gym app: MongoDB-backed training plans and exercises, read-only public HTTP APIs, idempotent seeding, and typed dummy-data fallback when the database is unavailable or empty.

Aligns with product intent in [`SPEC.md`](../SPEC.md): read-only app, no users, no custom routine creation yet.

## Out of scope

- Public write/update/delete HTTP endpoints
- Auth / users
- Exercise images / web image search
- Frontend node navigation (see frontend docs)
- Changes to the existing rate limiter beyond what already exists

## Constraints

- Avoid repeating code (DRY)
- Avoid large functions; prefer short, single-responsibility units
- Avoid inventing unstructured or out-of-context responses
- Do not commit or push without human review / explicit request
- Avoid `any`
- Avoid circular dependencies
- Avoid blocking code (use async I/O)

## Dev practices

- AI proposes; human approves changes
- Ask when information is unclear
- If something looks wrong, challenge it with evidence
- Keep context slim: atomize work across agents when tasks are independent
- Before implementation: check whether the current branch is `main`, whether it tracks remote, and whether it is behind `origin/main`. If on `main` after user validation, create a feature branch. If already on the correct feature branch, continue. Notify only when behind `origin/main`.
- In an ongoing fix stream on a feature branch, skip the branch dance unless asked

## Agent skills

### Plan atomization

Split implementation into independent vs dependent work. Run independent work in parallel (subagents) when useful.

### Git remote / PR (when user requests)

If Git MCP is available: commit (if needed) with an appropriate message, push the branch, open a PR with a clear title and description. If not: give the user a ready-to-copy commit message (if uncommitted), PR title, and PR body.

---

## Architecture

Mirror the existing getinfo layering:

```
route → service → repository → schema
```

| Layer | Responsibility |
|-------|----------------|
| Route | HTTP only: parse params, call service, return envelope + status |
| Service | Orchestration: DB vs dummy fallback, logging |
| Repository | Mongo read + write/update helpers (no HTTP) |
| Schema | Zod contracts + mappers to API response types |

Shared Mongo client lives under `src/lib/db/`.

### Response envelope

Success:

```json
{ "ok": true, "data": { ... } }
```

Error:

```json
{ "ok": false, "error": { "code": "NOT_FOUND", "message": "..." } }
```

Optional debug field when serving fixtures: `meta.source: "database" | "dummy"`.

Existing `GET /api/getinfo` remains unchanged.

---

## Data model

Two collections so list/detail navigation and exercise lookup by name stay simple.

### Why not fully nested documents

Days store **name refs** only. Exercise/subplan detail resolves from the `exercises` collection. That:

- Avoids duplicating how-to text across plans
- Makes `GET /api/exercises/[name]` a direct lookup
- Treats subplans as user-facing “exercise” nodes (`type: "subplan"`)

### `training_plans`

| Field | Type | Notes |
|-------|------|--------|
| `_id` | ObjectId | |
| `slug` | string | Unique, URL-safe; usable as `[id]` |
| `title` | string | |
| `summary` | string? | List card blurb |
| `days` | object | Keys: `monday` … `sunday` (omit unused days) |
| `days[day].exerciseNames` | string[] | Refs into `exercises.name` |
| `days[day].subplanName` | string? | Ref into a `type: "subplan"` doc |
| `days[day].comments` | string? | |
| `tips.comments` | string? | |
| `tips.diet` | string? | |
| `tips.progressionHandling` | string? | |
| `tips.importantNotes` | string? | |

### `exercises`

Shared catalog; subplans use the same collection.

| Field | Type | Notes |
|-------|------|--------|
| `_id` | ObjectId | |
| `name` | string | Unique, URL-safe key for `GET /api/exercises/[name]` |
| `type` | `"exercise" \| "subplan"` | |
| `description` | string? | Typical for exercises |
| `howTo` | string? | Typical for exercises |
| `exercises` | string[]? | Subplan only: child exercise names |
| `comments` | string? | Typical for subplans |
| `image` | — | Deferred; out of scope |

Indexes: unique on `training_plans.slug`, unique on `exercises.name`.

---

## Repository CRUD (not HTTP)

Repositories expose:

- **Read:** `findAllPlans`, `findPlanByIdOrSlug`, `findExerciseByName`, counts as needed
- **Write:** `insertPlan`, `insertExercise`
- **Update:** `updatePlan`, `updateExercise` (used by seed when `force` is set)

No `POST` / `PUT` / `PATCH` / `DELETE` API routes in this milestone.

---

## Seed

- Validate Mongo connection (ping) before seeding
- Idempotent by stable key (`slug` / `name`)
- Default: **insert if missing; do not overwrite** existing docs
- Optional `--force` (or `SEED_FORCE=true`): allow update of existing docs
- Seed script must not wipe collections

## Dummy-data fallback

If Mongo is unavailable **or** a read returns empty when data is expected:

- Serve **typed fixtures** with the same shapes as live API responses
- Log the fallback path
- Set `meta.source: "dummy"` when returning fixture-backed responses
- Never invent ad-hoc unstructured payloads inside route handlers

---

## Public API contracts

All routes use Zod for path params (and response mapping where useful).

### `GET /api/routines`

List training plans.

**Response `data`:** array of `{ id, slug, title, summary? }`

**Errors:** `500` on unexpected failure after fallback exhausted (prefer dummy list over hard fail when fixtures exist).

### `GET /api/routines/[id]`

Plan detail: days + tips. `[id]` resolves as ObjectId **or** `slug`.

**Response `data`:** `{ id, slug, title, summary?, days, tips }`

**Errors:**

- `400` — invalid id/slug param
- `404` — not found in DB and not in fixtures

### `GET /api/exercises/[name]`

Exercise or subplan by `name`.

**Response `data`:**

- Exercise: `{ name, type: "exercise", description?, howTo? }`
- Subplan: `{ name, type: "subplan", exercises?, comments? }`

**Errors:**

- `400` — invalid name
- `404` — not found in DB and not in fixtures

---

## Environment

| Variable | Required | Description |
|----------|----------|-------------|
| `MONGODB_URI` | yes (for live DB) | Connection string |
| `MONGODB_DB` | yes (for live DB) | Database name |
| `SEED_FORCE` | no | When `true`, seed may overwrite existing docs |

Document in `.env.example`. Never commit secrets.

---

## Testing

Small, reliable unit tests (Vitest):

- Zod schema / mapper behavior
- Param validation
- Service dummy fallback when repository/DB fails or returns empty

Do **not** require a live MongoDB instance in CI for these tests.

---

## Implementation checklist

1. Spec (this document)
2. Branch hygiene vs `main` / `origin/main`
3. `mongodb` + `zod`, env example, shared client + connection validation
4. Zod schemas + repositories (read + write/update)
5. Idempotent seed + typed dummy fixtures
6. Read API routes + services
7. Vitest + focused tests
