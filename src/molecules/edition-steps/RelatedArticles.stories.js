import React from "react";
import RelatedArticles from "./RelatedArticles";

export default {
  component: RelatedArticles,
  title: "Molecules/RelatedArticles",
};

const Template = (args) => <RelatedArticles {...args} />;

export const Default = Template.bind({});
Default.args = {};
