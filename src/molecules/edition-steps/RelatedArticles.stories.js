import React from "react";
import RelatedArticles from "./RelatedArticles";

import testingImage from "../../assets/testingImage.png";

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
      images: [testingImage],
      unitMeasure: "Pieza",
      name: "bodega",
      sku: "123412341234",
      id: 1,
    },
    {
      images: [testingImage],
      unitMeasure: "Litro",
      name: "Main Data",
      sku: "123412341234",
      id: 2,
    },
    {
      images: [testingImage],
      unitMeasure: "Pieza",
      name: "Main Data",
      sku: "123412341234",
      id: 3,
    },
    {
      images: [testingImage],
      unitMeasure: "Pieza",
      name: "auto",
      sku: "123412341234",
      id: 4,
    },
    {
      images: [testingImage],
      unitMeasure: "Kilogramo",
      name: "Auto",
      sku: "123412341234",
      id: 5,
    },
  ],
};

export const ArticlesSelected = Template.bind({});
ArticlesSelected.args = {
  ...Default.args,
  articlesSelected: Default.args.articles.map((e) => {
    return { ...e, qty: "3" };
  }),
};
