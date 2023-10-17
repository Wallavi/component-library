import React, { useEffect, useState } from "react";
import UploadImages from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/UploadImages",
  component: UploadImages,
} satisfies Meta<typeof UploadImages>;

export default meta;

type Story = StoryObj<typeof UploadImages>;

const UploadImagesWithHooks = () => {
  const [images, setImages] = useState<Array<any>>([]);

  return (
    <UploadImages
      handleDropImage={(newFiles) => {
        let imagesC = [...images];
        setImages(imagesC.concat(newFiles));
      }}
    />
  );
};

export const Primary: Story = {
  render: () => <UploadImagesWithHooks />,
};
