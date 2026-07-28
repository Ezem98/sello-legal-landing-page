export interface TrustedBrand {
  name: string
  logoSrc?: string
}

// TODO: reemplazar por las marcas reales (nombre y, si hay, /brands/<archivo>.png)
export const trustedBrands: TrustedBrand[] = [
  { name: "Marca 1" },
  { name: "Marca 2" },
  { name: "Marca 3" },
  { name: "Marca 4" },
  { name: "Marca 5" },
  { name: "Marca 6" },
]
