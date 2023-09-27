import PasswordRecovery from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Screens/PasswordRecovery",
  component: PasswordRecovery,
} satisfies Meta<typeof PasswordRecovery>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    logo: "https://goho.vercel.app/_next/static/media/logo.14efb6e2.svg",
    title: "Recuperación de contraseña",
  },
};
