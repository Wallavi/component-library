import InterestPlaces from "./index";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Grid/filters/InterestPlaces",
  component: InterestPlaces,
} satisfies Meta<typeof InterestPlaces>;

type Story = StoryObj<typeof meta>;

export default meta;

const locationSelected = (value) => {
  console.log("value", value);
};

export const Primary: Story = {
  args: {
    buttonLabel: "Sitios de Interés",
    longitude: -104.8784836,
    latitude: 21.48073,
    zoom: 14,
    locationSelected: locationSelected,
  },
};

export const Edit: Story = {
  args: {
    buttonLabel: "Sitios de Interés",
    longitude: -104.8805989,
    latitude: 21.481391,
    address: "Casino Campestre Infantil PAPALOTE, Nain, Hermosa Provincia, Tepic, Nayarit",
    zoom: 14,
    locationSelected: locationSelected,
  },
};
