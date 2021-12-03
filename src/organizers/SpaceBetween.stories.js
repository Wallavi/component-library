import React from "react";
import SpaceBetween from "./SpaceBetween";

export default {
  component: SpaceBetween,
  title: "Organizers/SpaceBetween",
};

const Template = (args) => <SpaceBetween {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [<p key="1">First element</p>, <p key="2">Second Element</p>],
};
