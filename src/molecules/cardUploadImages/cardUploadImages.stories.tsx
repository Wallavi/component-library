import React, { useState } from "react";
import CardUploadImages from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/CardUploadImages",
  component: CardUploadImages,
} satisfies Meta<typeof CardUploadImages>;

export default meta;

type Story = StoryObj<typeof CardUploadImages>;

const CardUploadImagesWithHooks = () => {
  const [images, setImages] = useState<Array<any>>([]);

  return (
    <CardUploadImages
      handleDropImage={(newFiles) => {
        let imagesC = [...images];
        setImages(imagesC.concat(newFiles));
      }}
      images={images}
      deleteItem={(idx: number) => {
        let imagesC = [...images];
        imagesC.splice(idx, 1);
        setImages(imagesC);
      }}
      customMap={{ primaryText: "path" }}
    />
  );
};

export const Primary: Story = {
  render: () => <CardUploadImagesWithHooks />,
};
