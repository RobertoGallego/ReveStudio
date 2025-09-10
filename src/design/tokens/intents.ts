import type { Intent } from "@/types"

export const intentStyles: Record<
  Intent,
  { backgroundColor: string; color: string }
> = {
  primary: { backgroundColor: "#007bff", color: "#ffffff" },
  secondary: { backgroundColor: "#ffffff", color: "#4a4a4a" },
  success: { backgroundColor: "#28a745", color: "#ffffff" },
  warning: { backgroundColor: "#ffc107", color: "#ffffff" },
  danger: { backgroundColor: "#dc3545", color: "#ffffff" },
}
