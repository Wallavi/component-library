import React from "react";
import Input from "./Input";

export default {
  component: Input,
  title: "Atoms/Input",
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Placeholder",
  value: "My value",
  onChange: () => {
    console.log("onChange");
  },
};
