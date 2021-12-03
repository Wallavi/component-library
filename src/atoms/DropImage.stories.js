import React from "react";
import DropImage from "./DropImage";

export default {
  component: DropImage,
  title: "Atoms/DropImage",
};

const Template = (args) => <DropImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleDropImage: (files) => {
    console.log(files);
  },
  images: [],
};
