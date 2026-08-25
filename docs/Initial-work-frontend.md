# Initial Frontend Spec

## Goal

Build the first working frontend for the gym app: read-only plan gallery and detail navigation, exercise side panel with hover prefetch, MUI-based UI shell, English message constants (i18n-ready), and light/dark mode.

Aligns with product intent in [`SPEC.md`](../SPEC.md) and consumes the backend described in [`Initial-work-backend.md`](./Initial-work-backend.md).

## Out of scope

- Lazy image loading / exercise images / web image search
- Write APIs, users, custom routines
- Full i18n library / locale routes
- Keeping the getinfo rate-limit demo on `/` (API remains for backend experiments)

## Constraints

- Same general constraints as the backend
- Avoid overuse of `useEffect`
- Avoid huge components; prefer small, single-responsibility units
- Separate fetch/parse logic from presentational UI
- Prefer Server Components for initial page data; client only for drawer, theme toggle, hover prefetch, and interactive carousel

## Dev practices

- AI proposes; human approves when unclear
- Use clean small components
- Use hooks as needed
- Do not commit or push without explicit request

## Decisions

| Topic | Choice |
|-------|--------|
| Copy | Flat English keys in `src/constants/messages.ts` (swap-friendly for `next-intl` later) |
| UI kit | MUI for interactive/local components; Tailwind for page/layout spacing |
| Auth | None |
| Brand | Text logo **Masters** |

## Architecture

```
page (RSC) → lib/api client → /api/* → shared Zod types
client islands → theme / drawer / prefetch hooks
```

### Backend API mapping

| UI need | Source |
|---------|--------|
| Gallery (`/`, `/plans`) | `GET /api/routines` → `RoutineListItem[]` |
| Plan detail (`/plan/[id]`) | `GET /api/routines/[id]` — prefer **slug** in links |
| Day content (`/plan/[id]/[day]`) | Slice `data.days[weekday]` from plan detail (no day endpoint) |
| Exercise / subplan panel | `GET /api/exercises/[name]` |
| Hover preload | Prefetch same exercise URL on hover |

Envelope: `{ ok: true, data }` / `{ ok: false, error: { code, message } }`. Optional `meta.source`. Rate-limit `429` may be `{ error: "Rate limit exceeded" }` (non-envelope).

Shared types: `RoutineListItem`, `RoutineDetail`, `DaySlot`, `Tips`, `Weekday`, `ExerciseResponse`, `WEEKDAYS` from `src/lib/schemas/*` and `src/lib/db/collections.ts`.

## Routing

| Route | Content |
|-------|---------|
| `/` | Banner (constants) + centered plans gallery |
| `/plans` | Gallery only (no banner) |
| `/about` | Constants copy + GitHub link |
| `/plan/[id]` | Plan tips/notes + day carousel linking to day routes |
| `/plan/[id]/[day]` | Day exercises/subplan; click opens Drawer with detail + Google search link |

Shell: top nav (Masters left; Plans / About right), small side margins, footer. Invalid `[day]` (not in `WEEKDAYS`) → not-found.

## Components

### Layout

- `AppShell`, `Nav`, `Footer`

### UI primitives

- Cards, Texts, Lists, Gallery, Carousel
- Error boundaries, Loading boundaries

### Plans feature

- `PlanGallery`, `PlanTips`, `DayCarousel`, `DayExerciseList`, `ExerciseDrawer`

### Theme

- MUI ThemeProvider + `ColorModeProvider` (persist to `localStorage`)

## Testing

Small Vitest unit tests (no live Mongo):

- API envelope parser (ok / error / 429)
- Day param validation helper

## Implementation checklist

1. Spec (this document)
2. Branch hygiene vs `main` / `origin/main`
3. MUI + Emotion + App Router cache; theme + color mode
4. Message constants + AppShell (Nav / Footer)
5. Typed API client
6. UI primitives + plan feature components
7. Routes: `/`, `/plans`, `/about`, `/plan/[id]`, `/plan/[id]/[day]`
8. Hover prefetch + light/dark toggle
9. Focused Vitest coverage
