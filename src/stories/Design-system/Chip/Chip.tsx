import { intentStyles } from "../../../design/tokens/intents"
import type { Intent, Size, Variant } from "@/types"
import { Avatar } from "../Avatar/Avatar"
import Icon from "../Icon/Icon"
import { BsQuestionLg } from "react-icons/bs"

interface ChipProps {
  variant?: Variant
  intent?: Intent
  size?: Size
  withIcon?: boolean
  withAvatar?: boolean
  onDelete?: () => void
  label?: string
}

export const Chip = ({
  variant = "solid",
  withIcon = false,
  withAvatar = false,
  intent = "primary",
  size = "sm",
  label = "Chip",
}: ChipProps) => {
  return (
    <div
      style={{
        backgroundColor: intentStyles[intent].backgroundColor,
        borderRadius: 100,
        color: "white",
        display: "flex",
        alignItems: "center",
        padding: "2px 4px",
        gap: 4,
      }}
    >
      {!withAvatar && <Avatar label="Avatar" src="https://i.pravatar.cc/300" />}

      {withIcon && <Icon IconName={BsQuestionLg} color="white" />}

      <div
        style={{
          fontSize: "14px",
          paddingInline: 2,
          fontFamily: "Arial, sans-serif",
        }}
      >
        {label}
      </div>
    </div>
  )
}
