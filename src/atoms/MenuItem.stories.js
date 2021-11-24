import React from "react";
import MenuItem from "./MenuItem";

export default {
  component: MenuItem,
  title: "Atoms/MenuItem",
};

const Template = (args) => <MenuItem {...args} />;

export const Default = Template.bind({});
Default.args = {};
