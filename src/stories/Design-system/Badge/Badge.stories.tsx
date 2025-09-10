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
    <div style={{ display: "flex", gap: "20px", alignItems: "center", flexWrap: "wrap" }}>
      <Badge badgeContent={10} maxNumberLength={1}>
        <Button label="Notification" intent="secondary" />
      </Badge>

      <Badge badgeContent={999} maxNumberLength={2}>
        <Button label="Messages" />
      </Badge>

      <Badge badgeContent={1001} maxNumberLength={3}>
        <Button label="Send" />
      </Badge>

      <Badge badgeContent={4}>
        <Avatar label="User Avatar" />
      </Badge>

      <Badge badgeContent={42}>
        <Avatar label="PG" />
      </Badge>

      <Badge badgeContent={2025}>
        <Avatar label="GG" />
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
