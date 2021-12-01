import React from "react";
import Dropdown from "./Dropdown";

export default {
  component: Dropdown,
  title: "Organisms/Dropdown",
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Buscar artículo por nombre o SKU",
};
