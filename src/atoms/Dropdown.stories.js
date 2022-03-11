import React from "react";
import Dropdown from "./Dropdown";

export default {
  component: Dropdown,
  title: "Atoms/Dropdown",
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Unidad de medida",
  options: [
    { value: "KG", name: "Kilogramo" },
    { value: "PIECE", name: "Pieza" },
    { value: "LITER", name: "Litro" },
  ],
  handleChange: () => {},
};
