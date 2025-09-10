import type { Size } from "@/types"

export const sizeStyles: Record<Size, { fontSize: string; padding: string }> = {
  sm: { fontSize: "12px", padding: "6px 8px" },
  md: { fontSize: "14px", padding: "8px 10px" },
  lg: { fontSize: "16px", padding: "10px 12px" },
}
