import React, { useEffect, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const API_KEY = "AIzaSyDRukW3WJWmvsTitLG-EftojR-cPyWvRuA";

interface SuggestionPlacesP {
  description: string;
  place_id?: string;
}

interface SuggestionPlacesProps {
  getLocationSelected: (value: any) => void;
  autocompleteValue?: SuggestionPlacesP;
}

const SuggestionPlaces = ({
  getLocationSelected,
  autocompleteValue,
}: SuggestionPlacesProps) => {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState<SuggestionPlacesP | null>(
    autocompleteValue ? autocompleteValue : null
  );
  const [optionPlaces, setOptionPlaces] = useState<SuggestionPlacesP[]>([
    { description: "", place_id: "" },
  ]);

  const getPlaceSelected = (value: SuggestionPlacesP) => {
    if (value?.place_id) {
      const request = {
        placeId: value?.place_id,
        fields: ["address_components", "geometry", "formatted_address"],
      };
      const service = new window.google.maps.places.PlacesService(
        document.createElement("div")
      );
      service.getDetails(request, getLocationCallback);
    }
  };

  const getLocationCallback = (
    place: google.maps.places.PlaceResult,
    status: google.maps.places.PlacesServiceStatus
  ) => {
    if (status !== google.maps.places.PlacesServiceStatus.OK || !place) {
      console.error(status);
      return;
    }

    getLocationSelected({
      location: {
        lat: place.geometry?.location.lat(),
        lng: place.geometry?.location.lng(),
      },
      description: place.formatted_address,
    });
  };

  useEffect(() => {
    const loader = new Loader({
      apiKey: API_KEY,
      version: "weekly",
      libraries: ["places"],
    });

    let timeoutId: NodeJS.Timeout;

    loader.load().then(() => {
      const initService = (): void => {
        const displaySuggestions = (
          predictions: google.maps.places.QueryAutocompletePrediction[] | null,
          status: google.maps.places.PlacesServiceStatus
        ) => {
          if (
            status !== google.maps.places.PlacesServiceStatus.OK ||
            !predictions
          ) {
            console.error(status);
            return;
          }

          setOptionPlaces(predictions);
        };

        if(new window.google.maps.places.AutocompleteService()){
          const service = new window.google.maps.places.AutocompleteService();
          service.getQueryPredictions(
            { input: inputValue ? inputValue : "tepic" },
            displaySuggestions
          );
        }
      };

      // Clear the previous timeout when inputValue changes
      clearTimeout(timeoutId);

      // Set a new timeout
      timeoutId = setTimeout(() => {
        initService();
      }, 800);
    });

    return () => {
      clearTimeout(timeoutId);
    };
  }, [inputValue, setOptionPlaces]);

  useEffect(() => {
    if (autocompleteValue) {
      setValue(autocompleteValue);
    }
  }, [autocompleteValue]);

  return (
    <Box>
      <Autocomplete
        id="free-solo-demo"
        value={value}
        onChange={(event: any, newValue: SuggestionPlacesP) => {
          getPlaceSelected(newValue);
          setValue(newValue);
        }}
        getOptionLabel={(option) => option.description}
        filterOptions={(x) => x}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault(); // Prevent the default Enter key behavior
          }
        }}
        options={optionPlaces?.map((option) => option)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Ubicación"
            sx={{
              marginBottom: 1.5,
              ".MuiInputBase-root": {
                height: 56,
              },
            }}
          />
        )}
      />
    </Box>
  );
};

export default SuggestionPlaces;
