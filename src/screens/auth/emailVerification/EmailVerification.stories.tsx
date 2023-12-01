import { EmailVerification } from "../../../../dist/";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Screens/EmailVerification",
  component: EmailVerification,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof EmailVerification>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    title: "Por favor, verifica tu correo electrónico",
    logo: "https://goho.vercel.app/_next/static/media/logo.14efb6e2.svg",
    confirmEmail: "info@robertolegorreta.com",
  },
};
