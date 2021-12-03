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
  articles: [
    {
      unitMeasure: "Pieza",
      name: "bodega",
      sku: "123412341234",
      id: 1,
    },
    {
      unitMeasure: "Litro",
      name: "Main Data",
      sku: "123412341234",
      id: 2,
    },
    {
      unitMeasure: "Pieza",
      name: "Main Data",
      sku: "123412341234",
      id: 3,
    },
    {
      unitMeasure: "Pieza",
      name: "auto",
      sku: "123412341234",
      id: 4,
    },
    {
      unitMeasure: "Kilogramo",
      name: "Auto",
      sku: "123412341234",
      id: 5,
    },
  ],
};
