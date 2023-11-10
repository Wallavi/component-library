import React, { useState, useCallback } from "react";
import Map, { ViewStateChangeEvent, Marker, Source, Layer } from "react-map-gl";
import type { CircleLayer } from "react-map-gl";
import type { FeatureCollection } from "geojson";
import { AddressAutofill } from "@mapbox/search-js-react";

import "mapbox-gl/dist/mapbox-gl.css";

import { SxProps } from '@mui/material/styles';
import { useTheme, alpha } from "@mui/material";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import ApartmentIcon from "@mui/icons-material/Apartment";

const MAPBOX_TOKEN =
  "pk.eyJ1Ijoiam9zaWFzd2FsbGF2aSIsImEiOiJjbG84dmgzNGQwNDE1Mmx0ZnhxaTZ3cTF5In0.9bEo0UC3I-4ToHpP1kGRtg";

export interface LocationSelectedProps {
  longitude: number;
  latitude: number;
  zoom: number;
  address: string;
}

export interface InterestPlacesProps {
  longitude: number;
  latitude: number;
  zoom: number;
  address?: string;
  locationSelected: (value: LocationSelectedProps) => void;
  sx?: SxProps;
}

const InterestPlaces = ({
  longitude,
  latitude,
  zoom,
  address,
  locationSelected,
  sx
}: InterestPlacesProps) => {
  const theme = useTheme();
  const [place, setPlace] = useState(address ? address : "");
  const [viewState, setViewState] = React.useState({
    longitude: longitude,
    latitude: latitude,
    zoom: zoom,
  });

  const geojson: FeatureCollection = {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [viewState.longitude, viewState.latitude],
        },
        properties: {},
      },
    ],
  };

  const layerStyle: CircleLayer = {
    id: "point",
    type: "circle",
    paint: {
      "circle-radius": 40,
      "circle-color": alpha(theme.palette.primary.main, 0.3),
    },
  };

  const handleViewState = (evt: ViewStateChangeEvent) => {
    setViewState(evt.viewState);
  };

  const handleRetrieve = useCallback(
    (res: any) => {
      const feature = res.features[0];
      setPlace(feature.properties.full_address);
      setViewState({
        longitude: feature.geometry.coordinates[0],
        latitude: feature.geometry.coordinates[1],
        zoom: zoom,
      });
      locationSelected({
        longitude: feature.geometry.coordinates[0],
        latitude: feature.geometry.coordinates[1],
        zoom: zoom,
        address: feature.properties.full_address,
      });
    },
    [zoom, locationSelected]
  );

  const handleOnMoveEnd = (evt: ViewStateChangeEvent) => {
    const coordinates = [evt.viewState.longitude, evt.viewState.latitude];
    const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${coordinates}.json?access_token=${MAPBOX_TOKEN}`;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response data here
        let addressText = "";
        data.features.forEach((feature: { text: string }, idx: number) => {
          const addComma = idx < data.features.length - 1 ? ", " : "";
          addressText = addressText + feature.text + addComma;
        });
        setPlace(addressText);
        locationSelected({
          longitude: evt.viewState.longitude,
          latitude: evt.viewState.latitude,
          zoom: evt.viewState.zoom,
          address: addressText,
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <Box padding={2} onKeyDown={(e) => e.stopPropagation()} sx={sx}>
        <form autoComplete="off">
          {/* @ts-ignore */}
          <AddressAutofill
            accessToken={MAPBOX_TOKEN}
            onRetrieve={handleRetrieve}
            popoverOptions={{
              offset: 20,
            }}
            theme={{
              cssText: `
                .Results,
                .Modal {
                  z-index: 3000
                }
                `,
            }}
            browserAutofillEnabled={false}
          >
            <TextField
              fullWidth
              value={place}
              autoComplete="off"
              id="mapbox-autofill"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPlace(event.target.value);
              }}
              sx={{
                marginBottom: 1.5,
                ".MuiInputBase-root": {
                  height: 56,
                },
              }}
              inputProps={{
                autoComplete: "off",
              }}
            />
          </AddressAutofill>
        </form>
        <Map
          {...viewState}
          id="mymap"
          onMove={(evt) => handleViewState(evt)}
          onMoveEnd={(evt) => handleOnMoveEnd(evt)}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/light-v11"
          mapboxAccessToken={MAPBOX_TOKEN}
        >
          <Marker key={"zone1"} {...viewState}>
            <ApartmentIcon color="primary" />
          </Marker>
          <Source id="my-data" type="geojson" data={geojson}>
            <Layer {...layerStyle} />
          </Source>
        </Map>
      </Box>
    </>
  );
};

export default InterestPlaces;
