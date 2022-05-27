import React from "react";
import ArticleData from "./index";

export default {
  component: ArticleData,
  title: "Molecules/ArticleData",
};

const Template = (args) => <ArticleData {...args} />;

export const Default = Template.bind({});
Default.args = {
  articleData: {
    name: "Nombre de prueba",
    unitMeasure: "PIECE",
    alarm: "100",
    sku: "SKU de prueba",
    price: "12",
    priceToSell: "15",
    notes: "Notas de prueba",
    currency: "MXN",
  },
};
