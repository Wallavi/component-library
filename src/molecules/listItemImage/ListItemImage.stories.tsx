import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import ListItemImage from "./index";
// @ts-ignore
import testingImage from "../../assets/testingImage.png";

const meta = {
  title: "Molecules/ListItemImage",
  component: ListItemImage,
  render: ({ ...args }) => (
    <div style={{ height: "600px" }}>
      <div style={{ height: "300px" }}></div>
      <ListItemImage {...args} />{" "}
    </div>
  ),
} satisfies Meta<typeof ListItemImage>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    primaryText: "Primary Text",
    secondaryText: "Secondary Text",
    srcImg: testingImage,
    deleteItem: () => {
      console.log("deleteItem");
    },
  },
};
