import React from "react";
import Locations from "./index";

import * as SelectLocationStories from "../../SelectLocation/SelectLocation.stories";

export default {
  component: Locations,
  title: "Molecules/Locations",
};

const Template = (args) => <Locations {...args} />;

const multipleLocation = [];
const articleLocation = [];
for (let i = 0; i < 5; i++) {
  multipleLocation.push({ ...SelectLocationStories.Default.args, id: i });
  if (i < 2) {
    articleLocation.push({
      ...SelectLocationStories.Default.args,
      id: (i + 1) * 2,
    });
  }
}

export const Default = Template.bind({});
Default.args = {
  locations: multipleLocation,
  handleChange: (evt) => console.log(evt),
};

export const ArticleLocations = Template.bind({});
ArticleLocations.args = {
  locations: multipleLocation,
  articleLocations: {
    newLocations: [0, 1],
    oldLocations: articleLocation,
    removedLocations: [4],
  },
  handleChange: (evt) => console.log(evt),
};
