import React from "react";
import Helper from "./Helper";

export default {
  component: Helper,
  title: "Atoms/Helper",
};

const Template = (args) => <Helper {...args} />;

export const Default = Template.bind({});
Default.args = {
  label:
    "Este es un helper largo y probablemente confuso, could it be even larger?",
};
