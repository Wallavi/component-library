import React from "react";
import Dropdown from "./Dropdown";

import testingImage from "../assets/testingImage.png";

export default {
  component: Dropdown,
  title: "Organisms/Dropdown",
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Buscar artículo por nombre o SKU",
  listItems: [
    {
      source: testingImage,
      mainData: "bodega",
      secondaryData: "Secondary Data",
      id: 1,
    },
    {
      source: testingImage,
      mainData: "Main Data",
      secondaryData: "Artesanal ",
      id: 2,
    },
    {
      source: testingImage,
      mainData: "Main Data",
      secondaryData: "Producto",
      id: 3,
    },
    {
      source: testingImage,
      mainData: "auto",
      secondaryData: "Bodega",
      id: 4,
    },
    {
      source: testingImage,
      mainData: "Main Data",
      secondaryData: "Auto",
      id: 5,
    },
  ],
};
