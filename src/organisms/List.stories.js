import React from "react";
import List from "./List";

import testingImage from "../assets/testingImage.png";

export default {
  component: List,
  title: "Organisms/List",
};

const Template = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  handleMouseOver: () => {},
  handleClick: () => {},
  listItems: [
    {
      source: testingImage,
      unitMeasure: "Pieza",
      mainData: "bodega",
      secondaryData: "Secondary Data",
      id: 1,
      qty: "",
    },
    {
      source: testingImage,
      unitMeasure: "Litro",
      mainData: "Main Data",
      secondaryData: "Artesanal ",
      id: 2,
      qty: "",
    },
    {
      source: testingImage,
      unitMeasure: "Pieza",
      mainData: "Main Data",
      secondaryData: "Producto",
      id: 3,
      qty: "",
    },
    {
      source: testingImage,
      unitMeasure: "Pieza",
      mainData: "auto",
      secondaryData: "Bodega",
      id: 4,
      qty: "",
    },
    {
      source: testingImage,
      unitMeasure: "Kilogramo",
      mainData: "Main Data",
      secondaryData: "Auto",
      id: 5,
      qty: "",
    },
  ],
};

export const EmptyList = Template.bind({});
EmptyList.args = {
  ...Default.args,
  listItems: [],
};
