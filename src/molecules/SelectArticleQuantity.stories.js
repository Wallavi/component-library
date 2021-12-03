import React from "react";
import SelectArticleQuantity from "./SelectArticleQuantity";

export default {
  component: SelectArticleQuantity,
  title: "Molecules/SelectArticleQuantity",
};

const Template = (args) => <SelectArticleQuantity {...args} />;

export const Default = Template.bind({});
Default.args = {
  articleName: "Nombre del artículo",
  unitMeasure: "Kilogramos",
  qty: "1",
  onChange: () => {},
};
