import Step from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/Step",
  component: Step,
} satisfies Meta<typeof Step>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    selected: 0,
    steps: ["One", "Two", "Three"],
    handleClick: () => {}
  },
};
