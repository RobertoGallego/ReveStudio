import type { IconType } from "react-icons"
import type { Size } from "../Buttons/Button/Button"
import { BsQuestionLg } from "react-icons/bs";

interface IconsProps {
  IconName: IconType
  size?: Size
  color?: string
}

const Icon = ({
  IconName = BsQuestionLg,
  size = "md",
  color = "#fff",
}: IconsProps) => {
  const sizeStyles: Record<Size, number> = {
    sm: 12,
    md: 16,
    lg: 20,
  }

  return <IconName size={sizeStyles[size]} color={color} />
}

export default Icon
