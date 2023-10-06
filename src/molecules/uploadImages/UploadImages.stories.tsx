import UploadImages from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/UploadImages",
  component: UploadImages,
} satisfies Meta<typeof UploadImages>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
    args: {
     
    },
  };