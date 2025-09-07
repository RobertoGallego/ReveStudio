import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "./Button"
import { MdInsertLink } from "react-icons/md"

import { fn } from "storybook/test"

const meta = {
  title: "Design-system/Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    intent: "primary",
    label: "Button",
    iconName: MdInsertLink,
  },
}

export const Secondary: Story = {
  args: {
    intent: "secondary",
    label: "Button",
    shape: "right",
  },
}

export const Success: Story = {
  args: {
    intent: "success",
    label: "Button",
    size: "lg",
    shape: "left",
  },
}

export const Warning: Story = {
  args: {
    intent: "warning",
    label: "Button",
    disabled: true,
  },
}

export const Danger: Story = {
  args: {
    intent: "danger",
    label: "Button",
    iconName: MdInsertLink,
    iconPosition: "right",
  },
}

export const IconOnly: Story = {
  args: {
    intent: "primary",
    iconName: MdInsertLink,
    shape: "default",
  },
}

export const Loading: Story = {
  args: {
    intent: "primary",
    label: "Loading...",
    disabled: true,
  },
}

export const NoLabel: Story = {
  args: {
    intent: "primary",
    iconName: MdInsertLink,
    shape: "default",
    size: "lg",
  },
}