import React, { useEffect, useState } from "react";
import NoImagesUploaded from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/NoImagesUploaded",
  component: NoImagesUploaded,
} satisfies Meta<typeof NoImagesUploaded>;

export default meta;

type Story = StoryObj<typeof NoImagesUploaded>;

const NoImagesUploadedHooks = () => {
  return <NoImagesUploaded />;
};

export const Primary: Story = {
  render: () => <NoImagesUploadedHooks />,
};
