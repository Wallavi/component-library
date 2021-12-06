import React from "react";
import SelectLocation from "./SelectLocation";

import testingImage from "../assets/testingImage.png";

export default {
  component: SelectLocation,
  title: "Molecules/SelectLocation",
};

const Template = (args) => <SelectLocation {...args} />;

export const Default = Template.bind({});
Default.args = {
  source: testingImage,
  name: "Ubicación mencionada",
  address: "Calle Margarita Viuda de Alvarado #152 col. Caminera Tepic Nayarit",
  selected: true,
};
