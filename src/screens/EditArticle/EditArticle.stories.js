import React from "react";
import EditArticle from "./index";

import * as ArticleDataStories from "../../molecules/edition-steps/ArticleData/ArticleData.stories";
import * as ImagesStories from "../../molecules/edition-steps/Images/Images.stories";
import * as RelatedArticlesStories from "../../molecules/edition-steps/RelatedArticles/RelatedArticles.stories";
import * as LocationsStories from "../../molecules/edition-steps/Locations/Locations.stories";

export default {
  component: EditArticle,
  title: "Screens/EditArticle",
};

const Template = (args) => <EditArticle {...args} />;

export const Default = Template.bind({});
Default.storyName = "Edit Article";
Default.args = {
  newArticle: false,
  ...ArticleDataStories.Default.args,
  articles: RelatedArticlesStories.Default.args.articles,
  articlesRelated:
    RelatedArticlesStories.ArticlesSelected.args.articlesSelected,
  ...ImagesStories.Default.args,
  locations: LocationsStories.Default.args.locations,
  articleLocations: LocationsStories.ArticleLocations.args.articleLocations,
  saveCallback: (evt) => console.log(evt),
};

// 👇 Each story then reuses that template
export const NewArticle = Template.bind({});
NewArticle.storyName = "New Article";
NewArticle.args = {
  articles: RelatedArticlesStories.Default.args.articles,
  locations: LocationsStories.Default.args.locations,
  saveCallback: (evt) => console.log(evt),
};
