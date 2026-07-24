import { getOptionalRequestContext } from "@cloudflare/next-on-pages"

// En Cloudflare Pages (runtime edge), las variables de entorno del dashboard
// no llegan por `process.env`, sino por el contexto de la request. En local
// (`next dev`) ese contexto no existe, así que caemos a `process.env` normal.
export function getEnv(): Record<string, string | undefined> {
  const ctx = getOptionalRequestContext()
  if (ctx?.env) {
    return ctx.env as unknown as Record<string, string | undefined>
  }
  return process.env as Record<string, string | undefined>
}
