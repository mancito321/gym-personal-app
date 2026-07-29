import { z } from "zod";

export const apiErrorSchema = z.object({
  code: z.string().min(1),
  message: z.string().min(1),
});

export const apiMetaSchema = z.object({
  source: z.enum(["database", "dummy"]),
});

export type ApiError = z.infer<typeof apiErrorSchema>;
export type ApiMeta = z.infer<typeof apiMetaSchema>;

export function okResponse<T>(data: T, meta?: ApiMeta) {
  return meta ? { ok: true as const, data, meta } : { ok: true as const, data };
}

export function errorResponse(code: string, message: string) {
  return {
    ok: false as const,
    error: { code, message },
  };
}
