import React from "react";
import Input from "./index";

export default {
  component: Input,
  title: "Atoms/Input",
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Placeholder",
  value: "",
  handleChange: () => {},
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
