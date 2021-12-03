import React from "react";
import Images from "./Images";

import * as DropImagesStories from "../../atoms/DropImage.stories";

import testingImage from "../../assets/testingImage.png";

export default {
  component: Images,
  title: "Molecules/Images",
};

const Template = (args) => <Images {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...DropImagesStories.Default.args,
  images: [testingImage, testingImage, testingImage, testingImage],
};
