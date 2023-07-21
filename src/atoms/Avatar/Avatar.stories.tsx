import Avatar from "./index";
import type { Meta, StoryObj } from "@storybook/react";

import testingImage from "../../assets/testingImage.png";

const meta = {
  title: "Atoms/Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    source: testingImage,
    width:"50px", 
    height:"50px", 
    radius: "1000px"
  },
};
