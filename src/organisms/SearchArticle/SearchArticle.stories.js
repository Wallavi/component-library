import React from "react";
import SearchArticle from "./index";

import * as ListStories from "../List/List.stories";

export default {
  component: SearchArticle,
  title: "Organisms/SearchArticle",
};

const Template = (args) => <SearchArticle {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Buscar artículo por nombre o SKU",
  listItems: ListStories.Default.args.listItems,
};
