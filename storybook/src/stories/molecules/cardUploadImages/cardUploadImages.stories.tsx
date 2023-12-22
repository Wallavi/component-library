import React, { useEffect, useState } from "react";
import { CardUploadImages } from "@wallavi/component-library";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/CardUploadImages",
  component: CardUploadImages,
} satisfies Meta<typeof CardUploadImages>;

export default meta;

type Story = StoryObj<typeof CardUploadImages>;

const CardUploadImagesWithHooks = (args: any) => {
  const [images, setImages] = useState<Array<any>>([]);
  useEffect(() => {
    console.log("d-", args.disabled);
  }, [args.disabled]);

  return (
    <CardUploadImages
      handleDropImage={(newFiles: any) => {
        let imagesC = [...images];
        setImages(imagesC.concat(newFiles));
      }}
      images={images}
      deleteItem={(idx: number) => {
        let imagesC = [...images];
        imagesC.splice(idx, 1);
        setImages(imagesC);
      }}
      disabled={args.disabled}
    />
  );
};

const CardUploadImagesWithEdits = (args: any) => {
  const [images, setImages] = useState<Array<any>>([{base64: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh2Byfe3KvYr-2OiL0JzS8REdnuyRgNNpXSqBC8BwyTQ&s", name: "awesome"}, {base64: "https://media.istockphoto.com/id/517188688/es/foto/paisaje-de-monta%C3%B1a.jpg?s=1024x1024&w=is&k=20&c=rGzwvSmrJAVG3WnxcmDXwwQlWC8sFHNZAiaI67IqrJc=", name:"landscape", show: false}]);
  useEffect(() => {
    console.log("d-", args.disabled);
  }, [args.disabled]);

  return (
    <CardUploadImages
      handleDropImage={(newFiles: any) => {
        let imagesC = [...images];
        setImages(imagesC.concat(newFiles));
      }}
      images={images}
      deleteItem={(idx: number) => {
        let imagesC = [...images];
        imagesC.splice(idx, 1);
        setImages(imagesC);
      }}
      disabled={args.disabled}
    />
  );
};

export const Primary: Story = {
  args: { disabled: false },
  render: (args) => <CardUploadImagesWithHooks {...args} />,
};

export const Edit: Story = {
  render: (args) => <CardUploadImagesWithEdits {...args} />
}