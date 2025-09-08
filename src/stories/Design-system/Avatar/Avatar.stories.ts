import type { Meta, StoryObj } from "@storybook/react-vite"
import { Avatar } from "./Avatar"

const meta = {
  title: "Design-system/Avatars/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: "MJ",
  },
}

export const WithImage: Story = {
  args: {
    label: "MJ",
    src: "https://i.pravatar.cc/300",
  },
}
