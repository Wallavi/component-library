import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import PreviewSwitch from "./preview";
import { Switch } from "@wallavi/component-library";

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
    checked: false,
    handleChecked: () => {},
  },
};

export const Selected: Story = {
  args: {
    checked: true,
    handleChecked: () => {},
  },
};

export const DefaultDisabled: Story = {
  args: {
    checked: false,
    disabled: true,
    handleChecked: () => {},
  },
};

export const SelectedDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
    handleChecked: () => {},
  },
};

export const Preview: Story = {
  args: {
    checked: false,
    handleChecked: () => {},
  },
  render: () => <PreviewSwitch />,
};
