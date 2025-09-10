import type { Intent, Size } from "@/types"

type maxNumberType = 1 | 2 | 3

interface BadgeProps {
  badgeContent?: number
  children?: React.ReactNode
  maxNumberLength?: maxNumberType
  color?: Intent
  size?: "sm" | "md" | "lg"
}

export const Badge = ({
  badgeContent,
  children,
  maxNumberLength,
  color = "success",
  size = "md",
}: BadgeProps) => {
  const maxNumber = { 1: 9, 2: 99, 3: 999 }
  const intentStyles: Record<
    Intent,
    { backgroundColor: string; color: string }
  > = {
    primary: { backgroundColor: "#007bff", color: "#ffffff" },
    secondary: { backgroundColor: "#ffffff", color: "#4a4a4a" },
    success: { backgroundColor: "#28a745", color: "#ffffff" },
    warning: { backgroundColor: "#ffc107", color: "#ffffff" },
    danger: { backgroundColor: "#dc3545", color: "#ffffff" },
  }

  const sizeStyles: Record<Size, { fontSize: string; padding: string, minWidth: number }> = {
    sm: { fontSize: "12px", padding: "6px 8px", minWidth: 16 },
    md: { fontSize: "14px", padding: "8px 10px", minWidth: 18 },
    lg: { fontSize: "16px", padding: "10px 12px", minWidth: 20 },
  }

  return (
    <div style={{ position: "relative" }}>
      {children}

      {!!badgeContent && (
        <div
          style={{
            position: children ? "absolute" : "relative",
            top: 0,
            right: 0,
            transform: children ? "translate(50%, -30%)" : "none",
            display: "flex",
            alignItems: "center",
            backgroundColor: intentStyles[color].backgroundColor,
            minWidth: sizeStyles[size].minWidth,
            height: sizeStyles[size].minWidth,
            borderRadius: 10,
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: 10,
              fontWeight: 600,
              fontFamily: "Arial, sans-serif",
              textAlign: "center",
              alignSelf: "center",
              display: "flex",
              paddingInline: "6px",
            }}
          >
            {maxNumberLength && badgeContent > maxNumber[maxNumberLength]
              ? `${maxNumber[maxNumberLength]}+`
              : badgeContent}
          </p>
        </div>
      )}
    </div>
  )
}
