import { Login } from "@wallavi/component-library";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Screens/Login",
  component: Login,
} satisfies Meta<typeof Login>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    logo: "https://goho.vercel.app/_next/static/media/logo.14efb6e2.svg",
    title: "Bienvenido. Inicia sesión",
  },
};
