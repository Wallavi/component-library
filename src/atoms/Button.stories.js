import React from "react";
import Button from "./Button";

export default {
  component: Button,
  title: "Atoms/Button",
};

const Template = (args) => <Button {...args} />;

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
