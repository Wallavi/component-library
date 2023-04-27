import React from "react";
import Edition from "./index";

export default {
  component: Edition,
  title: "Organisms/Edition",
};

const Template = (args) => <Edition {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Nuevo artículo",
  steps: ["One", "Two", "Three"],
  handleClick: () => {},
};
