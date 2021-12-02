import React from "react";
import Avatar from "./Avatar";

import testingImage from "../assets/testingImage.png";

export default {
  component: Avatar,
  title: "Atoms/Avatar",
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  source: testingImage,
};
