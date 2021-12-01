import React from "react";
import CompoundArticleLabel from "./CompoundArticle";

export default {
  component: CompoundArticleLabel,
  title: "Atoms/Labels/CompoundArticle",
};

const Template = (args) => <CompoundArticleLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  unitMeasure: "Pieza",
  articleName: "Nombre del artículo",
};
