import React from "react";
import Images from "./index";

import testingImage from "../../../assets/testingImage.png";

export default {
  component: Images,
  title: "Molecules/Images",
};

const Template = (args) => <Images {...args} />;

export const Default = Template.bind({});
Default.args = {
  // images: [testingImage, testingImage, testingImage, testingImage],
  images: {
    newImages: [],
    oldImages: [
      {
        id: 1,
        path: testingImage,
      },
      {
        id: 2,
        path: testingImage,
      },
    ],
  },
  removedImages: [],
};
