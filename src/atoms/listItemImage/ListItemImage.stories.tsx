import ListItemImage from "./index";
import type { Meta, StoryObj } from "@storybook/react";
import testingImage from "../../assets/testingImage.png";

const meta = {
  title: "Atoms/ListItemImage",
  component: ListItemImage,
} satisfies Meta<typeof ListItemImage>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    primaryText: "Primary Text",
    secondaryText: "Secondary Text",
    srcImg: testingImage,
  },
};
