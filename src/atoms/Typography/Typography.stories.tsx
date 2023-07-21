import Typography from "@mui/material/Typography";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/Typography",
  component: Typography,
} satisfies Meta<typeof Typography>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    variant: "h6",
    children: "Nuevo artículo",
    align: "center",
    gutterBottom: true,
    color: 'primary.dark'
  },
};
