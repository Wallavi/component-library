import React from "react";
import Input from "./Input";

export default {
  component: Input,
  title: "Atoms/Input",
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Placeholder",
  value: "",
  onChange: () => {
    console.log("onChange");
  },
};

export const Required = Template.bind({});
Required.args = {
  ...Default.args,
  required: true,
};

export const Error = Template.bind({});
Error.args = {
  ...Required.args,
  error: true,
  helperText: "El campo no puede estar vacío",
};
