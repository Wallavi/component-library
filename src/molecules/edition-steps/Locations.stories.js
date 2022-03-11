import React from "react";
import Locations from "./Locations";

import * as SelectLocationStories from "../SelectLocation.stories";

export default {
  component: Locations,
  title: "Molecules/Locations",
};

const Template = (args) => <Locations {...args} />;

const multipleLocation = [];
for (let i = 0; i < 5; i++) {
  multipleLocation.push({ ...SelectLocationStories.Default.args, id: i });
}

export const Default = Template.bind({});
Default.args = {
  locations: multipleLocation,
};
