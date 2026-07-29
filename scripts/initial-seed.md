# Initial seed source

Canonical seed data lives in [`src/lib/fixtures/gym.fixtures.ts`](../src/lib/fixtures/gym.fixtures.ts).

Run:

```bash
pnpm seed
```

Use `pnpm seed -- --force` (or `SEED_FORCE=true`) only when you intend to overwrite existing documents.

## Load percentage note (not stored in DB)

For exercises where estimating a 1RM is impractical—such as lateral raises, face pulls, curls, split squats and cable exercises—use repetitions in reserve instead of 1RM percentages:

- Weeks 1–2: about 3 RIR
- Weeks 3–4: 2–3 RIR
- Weeks 5–7: 1–2 RIR
- Week 8: reduce load and volume
