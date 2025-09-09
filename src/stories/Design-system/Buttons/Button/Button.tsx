import "./button.css"
import Icon from "../../Icon/Icon"
import type { IconType } from "react-icons"

export type Variant = "solid" | "outline" | "ghost" | "link"
export type Intent = "primary" | "secondary" | "success" | "warning" | "danger"
export type Size = "sm" | "md" | "lg"
export type Shape = "left" | "default" | "none" | "right"

export interface ButtonProps {
  disabled?: boolean
  iconName?: IconType
  iconNameRight?: IconType
  intent?: Intent
  label?: string
  loading?: boolean
  onClick?: () => void
  shape?: Shape
  size?: Size
  variant?: Variant
  skeleton?: boolean
}

export const Button = ({
  iconName,
  iconNameRight,
  intent = "primary",
  disabled = false,
  label,
  shape = "default",
  size = "md",
  ...props
}: ButtonProps) => {
  const borderRadius: Record<Shape, string> = {
    left: "12px 0 0 12px",
    default: "12px",
    right: "0 12px 12px 0",
    none: "0px",
  }

  const sizeStyles: Record<Size, { fontSize: string; padding: string }> = {
    sm: { fontSize: "12px", padding: "6px 8px" },
    md: { fontSize: "14px", padding: "8px 10px" },
    lg: { fontSize: "16px", padding: "10px 12px" },
  }

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
    <button
      {...props}
      type="button"
      aria-label={label}
      disabled={disabled}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: sizeStyles[size].padding,
        borderRadius: borderRadius[shape],
        backgroundColor: intentStyles[intent].backgroundColor,
        border: "1px solid #d1d1d1",
        boxShadow: "0px 1px 1px #d1d1d1",
        fontSize: sizeStyles[size].fontSize,
        fontWeight: "600",
        color: intentStyles[intent].color,
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {iconName && (
        <Icon IconName={iconName} color={intentStyles[intent].color} />
      )}

      {label}

      {iconNameRight && (
        <Icon IconName={iconNameRight} color={intentStyles[intent].color} />
      )}
    </button>
  )
}
