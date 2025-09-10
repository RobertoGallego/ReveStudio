import type { Meta, StoryObj } from "@storybook/react-vite"
import { Badge } from "./Badge"
import { Button } from "../Buttons/Button/Button"
import { Avatar } from "../Avatar/Avatar"

const meta = {
  title: "Design-system/Badges/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>


export default meta
type Story = StoryObj<typeof meta>

export const Playground = {
  render: () => (
    <div style={{ display: "flex", gap: "100px", flexWrap: "wrap" }}>
      <Badge badgeContent={5}>
        <Button label="Send" />
      </Badge>

      <Badge badgeContent={5}>
        <Avatar label="User Avatar" />
      </Badge>
    </div>
  ),
}

export const Primary: Story = {
  args: {
    badgeContent: 1,
    children: <Button label="Primary" intent="primary" />,
  },
}