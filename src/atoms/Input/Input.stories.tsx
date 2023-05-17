import React from "react";
import Input from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/Input",
  component: Input,
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    label: "Placeholder",
    onChange: () => {},
  },
};

export const Required: Story = {
  args: {
    ...Primary.args,
    required: true,
    autoFocus: true
  },
};

export const Error: Story = {
  args: {
    ...Required.args,
    value: "",
    error: true,
    helperText: "El campo no puede estar vacío",
  },
};
