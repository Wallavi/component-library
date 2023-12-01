import React, {useState} from "react";
import InterestPlaces from "./index";
import type { Meta, StoryObj } from "@storybook/react";

import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

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
      <Typography marginTop={3}>
        Lugares de Interes
      </Typography>
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

const EditingIntialValues = () => {
  const [coordinates, setCoordinates] = useState({longitude: -104.8784836, latitude: 21.48073, zoom: 14})

  const changeCoordinatesGDL = () => {
    setCoordinates({longitude: -103.4177992, latitude: 20.6738512, zoom:14})
  }

  const changeCoordinatesCDMX = () => {
    setCoordinates({longitude: -99.3084228, latitude: 19.3906594, zoom:14})
  }

  return (
    <>
      <Button onClick={changeCoordinatesGDL}>Change Coordinates to Guadalajara</Button>
      <Button onClick={changeCoordinatesCDMX}>Change Coordinates to CDMX</Button>
      <InterestPlaces 
        longitude={coordinates.longitude}
        latitude={coordinates.latitude}
        zoom={coordinates.zoom}
        locationSelected={() => {}}
        sx={{width: 600, height: 300, marginBottom: 8}}
      />
    </>
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

export const EditInitialCoordinates = {
  render: () => <EditingIntialValues />
}

export const CardPlaces = {
  render: () => <CardPlace />,
};