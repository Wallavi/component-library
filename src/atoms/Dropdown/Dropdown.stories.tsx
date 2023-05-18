import React from "react";
import Dropdown from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/Dropdown",
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    label: "Unidad de medida",
    value: "KG",
    options: [
      { value: "KG", name: "Kilogramo" },
      { value: "PIECE", name: "Pieza" },
      { value: "LITER", name: "Litro" },
    ],
  },
};
