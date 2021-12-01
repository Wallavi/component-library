import React from "react";
import List from "./List";

import testingImage from "../assets/testingImage.png";

export default {
  component: List,
  title: "Organisms/List",
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  listItems: [
    {
      source: testingImage,
      mainData: "Main Data",
      secondaryData: "Secondary Data",
    },
    {
      source: testingImage,
      mainData: "Main Data",
      secondaryData: "Secondary Data",
    },
    {
      source: testingImage,
      mainData: "Main Data",
      secondaryData: "Secondary Data",
    },
    {
      source: testingImage,
      mainData: "Main Data",
      secondaryData: "Secondary Data",
    },
    {
      source: testingImage,
      mainData: "Main Data",
      secondaryData: "Secondary Data",
    },
  ],
};

export const EmptyList = Template.bind({});
EmptyList.args = {
  listItems: [],
};
