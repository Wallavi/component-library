import React from "react";
import RelatedArticles from "./RelatedArticles";

export default {
  component: RelatedArticles,
  title: "Molecules/RelatedArticles",
};

const Template = (args) => <RelatedArticles {...args} />;

export const Default = Template.bind({});
Default.args = {
  articleName: "Nombre del artículo",
  unitMeasure: "Pieza",
  qty: "10",
  articlesSelected: [],
};

export const ArticlesSelected = Template.bind({});
ArticlesSelected.args = {
  ...Default.args,
  articlesSelected: [
    {
      articleName: "Nombre del artículo",
      unitMeasure: "Pieza",
      qty: "10",
    },
    {
      articleName: "Nombre del artículo",
      unitMeasure: "Pieza",
      qty: "10",
    },
    {
      articleName: "Nombre del artículo",
      unitMeasure: "Pieza",
      qty: "10",
    },
    {
      articleName: "Nombre del artículo",
      unitMeasure: "Pieza",
      qty: "10",
    },
  ],
};
