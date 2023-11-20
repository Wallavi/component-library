import React, { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const API_KEY = "AIzaSyBMlz15Dk7znSkuDgnaPkFFwNoEfIm_scE";

interface SuggestionPlacesP {
  description: string;
  place_id?: string;
}

interface OptionPlacesProps {
  predictions: [
    {
      description: string;
      place_id: string;
    }
  ];
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
  const [optionPlaces, setOptionPlaces] = useState<OptionPlacesProps>({
    predictions: [{ description: "", place_id: "" }],
  });

  const getSuggestions = (inputValue: string) => {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${inputValue}&types=geocode&key=${API_KEY}`;
    fetch(apiUrl, { method: "GET" })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Handle the data from the API response
        setOptionPlaces(data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  };

  const getPlaceSelected = (value: SuggestionPlacesP) => {
    if (value?.place_id) {
      const apiUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${value.place_id}&fields=geometry&key=${API_KEY}`;
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          // Handle the data from the API response
          getLocationSelected({
            ...data.result.geometry,
            description: value.description,
          });
        })
        .catch((error) => {
          // Handle errors
          console.error("Error fetching data:", error);
        });
    }
  };

  useEffect(() => {
    const apiUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=tepic&types=geocode&key=${API_KEY}`;
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        // Handle the data from the API response
        setOptionPlaces(data);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    if (inputValue) {
      const timeoutId = setTimeout(() => {
        getSuggestions(inputValue);
      }, 800);

      return () => {
        clearTimeout(timeoutId);
      };
    } else return;
  }, [inputValue]);

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
        options={optionPlaces?.predictions.map((option) => option)}
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
