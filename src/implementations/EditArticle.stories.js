import React from "react";
import EditArticle from "./EditArticle";

export default {
  component: EditArticle,
  title: "Implementation/EditArticle",
};

const Template = (args) => <EditArticle {...args} />;

export const Default = Template.bind({});
Default.args = {};
