import { Scrollable } from "@wallavi/component-library";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/Scrollable",
  component: Scrollable,
} satisfies Meta<typeof Scrollable>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    size: 100,
  },
};
