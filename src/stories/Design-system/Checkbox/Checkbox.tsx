import type { Intent } from "@/types"

interface CheckboxProps {
  checked?: boolean
  disabled?: boolean
  label?: string
  onChange?: (checked: boolean) => void
  intent?: Intent
}

export const Checkbox = ({
  checked,
  disabled = false,
  label,
  onChange,
  intent = "success",
}: CheckboxProps) => {
  const intentStyles = {
    primary: { backgroundColor: "#007bff", color: "#ffffff" },
    secondary: { backgroundColor: "#ffffff", color: "#4a4a4a" },
    success: { backgroundColor: "#28a745", color: "#ffffff" },
    warning: { backgroundColor: "#ffc107", color: "#ffffff" },
    danger: { backgroundColor: "#dc3545", color: "#ffffff" },
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2px",
      }}
    >
      <input
        type="checkbox"
        id={label}
        name={label}
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        style={{
          width: "16px",
          height: "16px",
          cursor: disabled ? "not-allowed" : "pointer",
          accentColor: intentStyles[intent].backgroundColor,
          verticalAlign: "middle",
          marginTop: "1px",
        }}
      />

      {label && (
        <label
          style={{
            fontSize: "14px",
            fontWeight: 500,
            fontFamily: "Arial, sans-serif",
            cursor: disabled ? "not-allowed" : "pointer",
          }}
          htmlFor={label}
        >
          {label}
        </label>
      )}
    </div>
  )
}
