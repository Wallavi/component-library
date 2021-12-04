import React from "react";
import ArticleData from "./ArticleData";

export default {
  component: ArticleData,
  title: "Molecules/ArticleData",
};

const Template = (args) => <ArticleData {...args} />;

export const Default = Template.bind({});
Default.args = {
  articleData: {
    name: "",
    unitMeasure: "",
    alarm: "",
    sku: "",
    price: "",
    priceToSell: "",
    notes: "",
    currency: "",
  },
};
