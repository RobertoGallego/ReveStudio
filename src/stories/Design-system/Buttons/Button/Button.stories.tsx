import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "./Button"
import { MdInsertLink } from "react-icons/md"
import { FaRegUser } from "react-icons/fa6"
import { FiUser, FiUserPlus } from "react-icons/fi"
import { fn } from "storybook/test"
import { FaRegFolderOpen, FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { BiExport } from "react-icons/bi"
import { HiDotsHorizontal } from "react-icons/hi"
import { GoPencil } from "react-icons/go"
import { TbCircleNumber2 } from "react-icons/tb"
import { FaRegHeart } from "react-icons/fa"
import { TiArrowForwardOutline } from "react-icons/ti"

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

export const Playground: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <Button label="Copy Link" intent="secondary" iconName={MdInsertLink} />
      <Button label="Login" intent="secondary" iconName={FiUser} />

      <Button label="Sign Up" intent="primary" iconName={FiUserPlus} />

      <div style={{ display: "flex" }}>
        <Button
          label="Document"
          intent="secondary"
          iconName={FaRegFolderOpen}
          shape="left"
        />

        <Button
          label="Export"
          intent="secondary"
          iconName={BiExport}
          shape="none"
        />

        <Button intent="secondary" iconName={HiDotsHorizontal} shape="right" />
      </div>

      <div style={{ display: "flex" }}>
        <Button intent="secondary" iconName={FaChevronLeft} shape="left" />

        <Button intent="secondary" iconName={FaChevronRight} shape="right" />
      </div>

      <Button label="Cancel" intent="secondary" />

      <Button label="Done" intent="primary" />

      <Button intent="secondary" iconName={GoPencil} />

      <Button intent="secondary" iconName={FaRegUser} />

      <Button
        intent="secondary"
        label="Like"
        iconName={FaRegHeart}
        iconNameRight={TbCircleNumber2}
      />

      <div style={{ display: "flex", gap: "6px" }}>
        <Button intent="secondary" iconName={FaChevronLeft} />

        <Button intent="secondary" iconName={FaChevronRight} />
      </div>

      <Button
        label="Forward"
        intent="secondary"
        iconName={TiArrowForwardOutline}
      />
    </div>
  ),
}

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
  },
}

export const Success: Story = {
  args: {
    intent: "success",
    label: "Button",
  },
}

export const Warning: Story = {
  args: {
    intent: "warning",
    label: "Button",
  },
}

export const Danger: Story = {
  args: {
    intent: "danger",
    label: "Button",
  },
}

export const Loading: Story = {
  args: {
    intent: "primary",
    label: "Loading...",
    disabled: true,
  },
}

export const Skeleton: Story = {
  args: {
    skeleton: true,
  },
}

export const IconOnly: Story = {
  args: {
    intent: "primary",
    iconName: MdInsertLink,
    shape: "default",
    size: "lg",
  },
}
