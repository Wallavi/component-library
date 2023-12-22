import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `$ ${value}`;
}

interface pricesProps {
  min: number;
  max: number;
}

interface MinimumDistanceSliderProps {
  setPrices: (value: pricesProps) => void;
  minPrice: number;
  maxPrice: number;
  numberOfSlices: number;
  priceValue: pricesProps;
}

export default function MinimumDistanceSlider({
  setPrices,
  minPrice,
  maxPrice,
  numberOfSlices,
  priceValue,
}: MinimumDistanceSliderProps) {
  const [value, setValue] = React.useState<number[]>([
    priceValue.min,
    priceValue.max,
  ]);

  const handleChange1 = (
    event: Event,
    newValue: number | number[],
    activeThumb: number
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - numberOfSlices), value[1]]);
      setPrices({
        min: Math.min(newValue[0], value[1] - numberOfSlices),
        max: value[1],
      });
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + numberOfSlices)]);
      setPrices({
        min: value[0],
        max: Math.max(newValue[1], value[0] + numberOfSlices),
      });
    }
  };

  return (
    <Box sx={{ width: "100%", paddingLeft: 1, paddingRight: 1, marginTop: -2 }}>
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        step={numberOfSlices}
        min={minPrice}
        max={maxPrice}
        sx={{
          color: (theme) => theme.palette.grey[400],
        }}
      />
    </Box>
  );
}
