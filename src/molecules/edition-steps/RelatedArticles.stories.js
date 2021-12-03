import React from "react";
import RelatedArticles from "./RelatedArticles";

import * as DropdownStories from "../../organisms/Dropdown.stories";

export default {
  component: RelatedArticles,
  title: "Molecules/RelatedArticles",
};

const Template = (args) => <RelatedArticles {...args} />;

export const Default = Template.bind({});
Default.args = {
  articleName: "Nombre del artículo",
  unitMeasure: "Pieza",
  qty: "10",
  articlesSelected: [],
  articles: DropdownStories.Default.args.listItems,
};

export const SelectedArticles = Template.bind({});
SelectedArticles.args = {
  ...Default.args,
  articlesSelected: [
    {
      articleName: "Test here",
      unitMeasure: "Pieza",
      qty: "1",
      id: 4,
    },
  ],
};
