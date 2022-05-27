import React from "react";
import Dropdown from "./index";

import * as ListStories from "../List/List.stories";

export default {
  component: Dropdown,
  title: "Organisms/Dropdown",
};

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Buscar artículo por nombre o SKU",
  listItems: ListStories.Default.args.listItems,
};
