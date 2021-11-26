import React from "react";
import Edition from "./Edition";

export default {
  component: Edition,
  title: "Molecules/Edition",
};

const Template = (args) => <Edition {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Nuevo artículo",
  steps: ["One", "Two", "Three"],
  handleClick: () => {},
};
