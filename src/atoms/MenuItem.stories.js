import React from "react";
import MenuItem from "./MenuItem";

export default {
  component: MenuItem,
  title: "Atoms/MenuItem",
};

const Template = (args) => <MenuItem {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Big = Template.bind({});
Big.args = {
  size: "BIG",
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  color: "pink",
  bgColor: "red",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  color: "pink",
  bgColor: "red",
};
