import React, { useState, useEffect } from "react";
import SuggestionPlaces from "../suggestion-places";
import Map, { ViewStateChangeEvent, Marker, Source, Layer } from "react-map-gl";
import type { CircleLayer } from "react-map-gl";
import type { FeatureCollection } from "geojson";

import "mapbox-gl/dist/mapbox-gl.css";

import { SxProps } from "@mui/material/styles";
import { useTheme, alpha } from "@mui/material";

import Box from "@mui/material/Box";

import ApartmentIcon from "@mui/icons-material/Apartment";

const MAPBOX_TOKEN =
  "pk.eyJ1IjoicmxlZ29ycmV0YSIsImEiOiJjaXYzZDBwY2YwMHprMnpxbm93aW5ubDkxIn0.XvwIpNBJK-ZS3VsiTRNv4w";

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
  sx,
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

  const getLocationSelected = (value: {
    location: { lat: number; lng: number };
    description: string;
  }) => {
    setPlace(value.description);
    setViewState({
      longitude: value.location.lng,
      latitude: value.location.lat,
      zoom: zoom,
    });
    locationSelected({
      longitude: value.location.lng,
      latitude: value.location.lat,
      zoom: zoom,
      address: value.description,
    });
  };

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

  useEffect(() => {
    setViewState({
      longitude: longitude,
      latitude: latitude,
      zoom: zoom,
    })
  }, [longitude, latitude, zoom])

  useEffect(() => {
    if (address) {
      setPlace(address);
    }
  }, [address]);
  

  return (
    <>
      <Box padding={2} onKeyDown={(e) => e.stopPropagation()} sx={sx}>
        <form autoComplete="off">
          <SuggestionPlaces
            getLocationSelected={getLocationSelected}
            autocompleteValue={{ description: place }}
          />
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
