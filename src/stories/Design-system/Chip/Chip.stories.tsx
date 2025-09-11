import type { Meta, StoryObj } from "@storybook/react-vite"
import { Chip } from "./Chip"
import { Button } from "../Buttons/Button/Button"
import { Avatar } from "../Avatar/Avatar"

const meta = {
  title: "Design-system/Chips/Chip",
  component: Chip,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "20px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Chip  />
    </div>
  ),
}
