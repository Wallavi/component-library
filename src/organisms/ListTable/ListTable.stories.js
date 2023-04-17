import React from "react";
import EditArticle from "./index";

import image from "../../assets/testingImage.png";

export default {
  component: EditArticle,
  title: "Organisms/ListTable",
};

const Template = (args) => <EditArticle {...args} />;

export const Default = Template.bind({});
Default.args = {
  listItems: [
    { name: "Producto 1", src: image },
    { name: "Producto 2", src: image },
    { name: "Producto 1", src: image },
    { name: "Producto 2", src: image },
    { name: "Producto 1", src: image },
    { name: "Producto 2", src: image },
  ],
  handleClick: (evt) => {},
};
