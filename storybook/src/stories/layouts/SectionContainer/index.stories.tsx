import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import PreviewSectionContainer from "./preview";
import { SectionContainer } from "@wallavi/component-library";

const meta = {
  title: "Layouts/SectionContainer",
  component: SectionContainer,
  argTypes: {},
} satisfies Meta<typeof SectionContainer>;

type Story = StoryObj<typeof meta>;

export default meta;

/*
export const Default: Story = {
  args: {
    checked: false,
    handleChecked: () => {},
  },
};
*/

export const Preview: Story = {
  args: {
    title: "Titulo de la seccion",
    chipLabel: "label",
    mobile: false,
  },
  render: (args) => (
    <PreviewSectionContainer
      title={args.title}
      chipLabel={args.chipLabel}
      mobile={args.mobile}
    />
  ),
};
