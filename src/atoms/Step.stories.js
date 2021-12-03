import React from "react";
import Step from "./Step";

export default {
  component: Step,
  title: "Atoms/Step",
};

const Template = (args) => <Step {...args} />;

export const Default = Template.bind({});
Default.args = {
  selected: 0,
  steps: ["One", "Two", "Three"],
  handleClick: () => {
    console.log("Clicked");
  },
};
