import React from "react";
import EditArticle from "./EditArticle";

import * as ArticleDataStories from "../molecules/edition-steps/ArticleData.stories";
import * as RelatedArticlesStories from "../molecules/edition-steps/RelatedArticles.stories";
import * as LocationsStories from "../molecules/edition-steps/Locations.stories";

export default {
  component: EditArticle,
  title: "Screens/EditArticle",
};

const Template = (args) => <EditArticle {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...ArticleDataStories.Default.args,
  articles: RelatedArticlesStories.Default.args.articles,
  articlesRelated:
    RelatedArticlesStories.ArticlesSelected.args.articlesSelected,
  locations: LocationsStories.Default.args.locations,
};
