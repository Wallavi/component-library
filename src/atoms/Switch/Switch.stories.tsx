import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Switch from ".";
import PreviewSwitch from "./overview";

const meta = {
  title: "Atoms/Switch",
  component: Switch,
  argTypes: {
    selected: {
      type: "boolean",
      defaultValue: false,
    },
    disabled: {
      type: "boolean",
      defaultValue: false,
    },
  },
} satisfies Meta<typeof Switch>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    selected: false,
    handleSelected: () => {},
  },
};

export const Selected: Story = {
  args: {
    selected: true,
    handleSelected: () => {},
  },
};

export const DefaultDisabled: Story = {
  args: {
    selected: false,
    disabled: true,
    handleSelected: () => {},
  },
};

export const SelectedDisabled: Story = {
  args: {
    selected: true,
    disabled: true,
    handleSelected: () => {},
  },
};

export const Preview: Story = {
  args: {
    selected: false,
    handleSelected: (event, isSelected) => {},
  },
  render: () => <PreviewSwitch />,
};
