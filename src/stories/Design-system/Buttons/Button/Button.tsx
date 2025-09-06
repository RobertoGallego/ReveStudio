import { IoMdLink } from "react-icons/io"
import "./button.css"

type Variant = "primary" | "secondary"
type Size = "small" | "medium" | "large"

export interface ButtonProps {
  variant?: Variant
  size?: Size
  label: string
  onClick?: () => void
}

export const Button = ({
  variant = "primary",
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      style={{
        display: "flex",
        alignItems: "center",
        gap: "6px",
        padding: "6px 12px",
        borderRadius: "12px",
        backgroundColor: "#fff",
        border: "1px solid #d1d1d1",
        boxShadow: "0px 1px 1px #d1d1d1",
        fontSize: "14px",
        fontWeight: "600",
        color: "#000",
      }}
      {...props}
    >
      <IoMdLink size={16} color="#000000" 
        fontWeight={"bold"}
      />

      {label}
    </button>
  )
}
