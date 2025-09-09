import type { Meta, StoryObj } from "@storybook/react-vite"
import { Checkbox } from "./Checkbox"
import { fn } from "storybook/test"


const meta = {
  title: "Design-system/Checkboxs/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: { onChange: fn() },
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Checkbox />
     
    </div>
  ),
}

export const Primary: Story = {
  args: {
    label: "Primary",
    intent: "primary",
  },
}

export const Secondary: Story = {
  args: {
    label: "Secondary",
    intent: "secondary",
  },
}

export const Success: Story = {
  args: {
    label: "Success",
    intent: "success",
  },
}

export const Warning: Story = {
  args: {
    label: "Warning",
    intent: "warning",
  },
}

export const Danger: Story = {
  args: {
    label: "Danger",
    intent: "danger",
  },
}

export const Disabled: Story = {
  args: {
    label: "Disabled",
    disabled: true,
  },
}