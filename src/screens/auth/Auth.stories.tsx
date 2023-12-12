import Auth from "./index.example";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Screens/Auth",
  component: Auth,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof Auth>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {},
};
