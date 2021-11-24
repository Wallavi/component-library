import React from "react";
import Logo from "./Logo";

export default {
  component: Logo,
  title: "Atoms/Logo",
};

const Template = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "MAIN",
};

export const White = Template.bind({});
White.args = {
  type: "WHITE",
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  type: "WHITE",
  width: "30%",
  height: "100px",
};
