import React from "react";
import Thumbnail from "./index";

import image from "../../assets/testingImage.png";

export default {
  component: Thumbnail,
  title: "Atoms/Thumbnail",
};

const Template = (args) => <Thumbnail {...args} />;

export const Default = Template.bind({});
Default.args = {
  source: image,
};

export const NewImage = Template.bind({});
NewImage.args = {
  source: image,
  isNewImage: true,
};

export const DeleteImg = Template.bind({});
DeleteImg.args = {
  source: image,
  isRemoved: true,
};
