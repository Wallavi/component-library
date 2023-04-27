import React from "react";
import ArticleData from "./index";

import * as RelatedArticlesStories from "../RelatedArticles/RelatedArticles.stories";

export default {
  component: ArticleData,
  title: "Molecules/Combo",
};

const Template = (args) => <ArticleData {...args} />;

export const Default = Template.bind({});
Default.args = {
  articles: RelatedArticlesStories.Default.args.articles,
  handleChange: (e) => {},
};

export const Edit = Template.bind({});
Edit.args = {
  articles: RelatedArticlesStories.Default.args.articles,
  articlesRelated: {
    oldArticlesRelated: [
      { id: 1, qty: "12", name: "Primer Sección", articles: [1, 3, 5] },
      { id: 2, qty: "24", name: "Segunda Sección", articles: [2, 4] },
    ],
  },
  handleChange: (e) => {},
};
