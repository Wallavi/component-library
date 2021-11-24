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
