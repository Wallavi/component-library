import React from "react";
import Dropdown from "./index";

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
