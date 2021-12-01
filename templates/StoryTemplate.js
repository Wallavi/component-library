import React from "react";
import ComponentName from "./ComponentName";

export default {
  component: ComponentName,
  title: "Atoms/ComponentName",
};

const Template = (args) => <ComponentName {...args} />;

export const Default = Template.bind({});
Default.args = {};
