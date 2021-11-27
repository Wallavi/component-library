import React from "react";
import SpaceBetween from "./SpaceBetween";

export default {
  component: SpaceBetween,
  title: "Organizers/SpaceBetween",
};

const Template = (args) => <SpaceBetween {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [<p>First element</p>, <p>Second Element</p>],
};
