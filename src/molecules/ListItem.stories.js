import React from "react";
import ListItem from "./ListItem";

import testingImage from "../assets/testingImage.png";

export default {
  component: ListItem,
  title: "Molecules/ListItem",
};

const Template = (args) => <ListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  source: testingImage,
  mainData: "Main data",
  secondaryData: "Secondary data",
};
