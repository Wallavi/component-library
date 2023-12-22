import { SuggestionPlaces, LocationSelectedProps } from "@wallavi/component-library";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Molecules/SuggestionPlaces",
  component: SuggestionPlaces,
} satisfies Meta<typeof SuggestionPlaces>;

type Story = StoryObj<typeof meta>;

export default meta;

const getLocationSelected = (value: LocationSelectedProps) => {
  console.log("value", value)
}

export const Primary: Story = {
  args: {
    getLocationSelected: getLocationSelected
  },
};

export const Edit: Story = {
  args: {
    getLocationSelected: getLocationSelected,
    autocompleteValue: {description: "Av. Universidad 99, Ciudad del Valle, Tepic, Nayarit, Mexico"}
  },
};