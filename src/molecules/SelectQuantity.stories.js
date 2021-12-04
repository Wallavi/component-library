import React from "react";
import SelectQuantity from "./SelectQuantity";

export default {
  component: SelectQuantity,
  title: "Molecules/SelectQuantity",
};

const Template = (args) => <SelectQuantity {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Nombre del artículo",
  unitMeasure: "Kilogramos",
  qty: "1",
  handleChange: () => {},
};
