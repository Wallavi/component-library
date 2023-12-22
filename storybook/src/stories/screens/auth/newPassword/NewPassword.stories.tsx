import { NewPassword } from "@wallavi/component-library";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Screens/NewPassword",
  component: NewPassword,
} satisfies Meta<typeof NewPassword>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    logo: "https://goho.vercel.app/_next/static/media/logo.14efb6e2.svg",
    title: "Escribe la nueva contraseña",
  },
};
