import type { Intent } from "@/types"

type maxNumberType = 1 | 2 | 3

interface BadgeProps {
  badgeContent?: number
  children: React.ReactNode
  maxNumberLength?: maxNumberType
  color?: Intent
}

export const Badge = ({
  badgeContent,
  children,
  maxNumberLength,
  color = "success",
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

  return (
    <div style={{ position: "relative" }}>
      {children}

      {!!badgeContent && (
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            transform: "translate(50%, -30%)",
            display: "flex",
            alignItems: "center",
            backgroundColor: intentStyles[color].backgroundColor,
            minWidth: 16,
            height: 16,
            borderRadius: 10,
          }}
        >
          <p
            style={{
              color: "white",
              fontSize: 10,
              fontWeight: 600,
              fontFamily: "Arial, sans-serif",
              padding: "0 4.5px",
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
