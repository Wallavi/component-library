import React from "react";
import InterestPlaces from "./index";
import type { Meta, StoryObj } from "@storybook/react";

import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"

const meta = {
  title: "Molecules/InterestPlaces",
  component: InterestPlaces,
} satisfies Meta<typeof InterestPlaces>;

type Story = StoryObj<typeof meta>;

export default meta;

const locationSelected = (value) => {
  console.log("value", value);
};

const CardPlace = () => {
  return (
    <Card>
      <CardContent>
      <Box display={"flex"} justifyContent={"space-between"}>
      <Box marginTop={3}>
        Lugares de Interes
      </Box>
      <InterestPlaces 
        longitude={-104.8784836}
        latitude={21.48073}
        zoom={14}
        locationSelected={() => {}}
        sx={{width: 600, height: 300, marginBottom: 8}}
      />
      </Box>
      </CardContent>
    </Card>
  )
}

export const Primary: Story = {
  args: {
    longitude: -104.8784836,
    latitude: 21.48073,
    zoom: 14,
    locationSelected: locationSelected,
    sx:{width: 800, height: 500}
  },
};

export const Edit: Story = {
  args: {
    longitude: -104.8805989,
    latitude: 21.481391,
    address: "Casino Campestre Infantil PAPALOTE, Nain, Hermosa Provincia, Tepic, Nayarit",
    zoom: 14,
    locationSelected: locationSelected,
    sx:{width: 800, height: 500}
  },
};

export const CardPlaces = {
  render: () => <CardPlace />,
};