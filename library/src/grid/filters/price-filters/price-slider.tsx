import React, { useState, useEffect } from "react";
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
  const [value, setValue] = useState<number[]>([
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
      setValue([Math.min(newValue[0], value[1] - 1), value[1]]);
      setPrices({
        min: Math.min(newValue[0], value[1] - 1),
        max: value[1],
      });
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + 1)]);
      setPrices({
        min: value[0],
        max: Math.max(newValue[1], value[0] + 1),
      });
    }
  };

  useEffect(() => {
    setValue([priceValue.min, priceValue.max]);
  }, [priceValue]);

  return (
    <Box
      sx={{
        width: "100%",
        marginTop: "-15px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Slider
        getAriaLabel={() => "Minimum distance"}
        value={value}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        disableSwap
        step={1}
        min={minPrice}
        max={maxPrice}
        size={"small"}
        sx={{
          color: (theme) => theme.palette.grey[400],
          width: "calc(100% - 30px)",
          "& .MuiSlider-rail": {
            backgroundColor: "rgba(238, 238, 238, 1)", // Set rail color with opacity
            opacity: 1,
            width: "calc(100% + 30px)",
            marginLeft: "-15px",
          },
          "& .MuiSlider-thumb": {
            width: "30px",
            height: "30px",
            background: "white",
            border: (theme) => `1px solid ${theme.palette.grey[400]}`,
          },
        }}
      />
    </Box>
  );
}
