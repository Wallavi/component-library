import ListItemImage from "./index";
import type { Meta, StoryObj } from "@storybook/react";
import testingImage from "../../assets/testingImage.png";
import React from "react";

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
  render: () => (
    <div style={{ height: "800px" }}>
      <div style={{ height: "100px" }}></div>
      <ListItemImage
        primaryText={"Primary Text"}
        srcImg={testingImage}
        secondaryText="Secondary Text"
      ></ListItemImage>{" "}
    </div>
  ),
};
