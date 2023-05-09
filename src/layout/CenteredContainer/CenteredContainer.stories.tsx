import React from "react";
import CenteredContainer from "./index";
import Step from "../../atoms/Step";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Layouts/CenteredContainer",
  component: CenteredContainer,
} satisfies Meta<typeof CenteredContainer>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    children: <Step 
                selected={1} 
                steps= {["One", "Two", "Three"]} 
              />
  },
};
