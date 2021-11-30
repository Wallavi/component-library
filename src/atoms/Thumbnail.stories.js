import React from "react";
import Thumbnail from "./Thumbnail";

import image from "../assets/testingImage.png";

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
