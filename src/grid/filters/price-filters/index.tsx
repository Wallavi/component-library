import React, { useState, useEffect } from "react";

import Histogram from "./price-histogram";
import MinimumDistanceSlider from "./price-slider";

import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface PriceValueProps {
  min: number;
  max: number;
}

interface PricesFilterProps {
  prices: number[];
  buttonLabel: string;
  getFilterPrices: (value: PriceValueProps) => void;
}

const PriceFilter = ({
  prices,
  buttonLabel,
  getFilterPrices,
}: PricesFilterProps) => {
  const maxPrice = Math.max(...prices);
  const minPrice = Math.min(...prices);

  const numberOfSlices = (maxPrice - minPrice) / 20;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [priceValue, setPriceValue] = useState<PriceValueProps>({
    min: minPrice,
    max: maxPrice,
  });
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    getFilterPrices(priceValue);
  }, [priceValue]);

  return (
    <>
      <Button
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        variant="filters"
      >
        {buttonLabel}
      </Button>
      <Menu
        id="category-menu"
        MenuListProps={{
          "aria-labelledby": "category-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Box width={500} padding={2} onKeyDown={(e) => e.stopPropagation()}>
          <Box display={"flex"} justifyContent={"center"}>
            <Histogram
              data={prices}
              width={460}
              height={120}
              maxPrice={maxPrice}
              minPrice={minPrice}
              numberOfSlices={numberOfSlices}
            />
          </Box>
          <Box>
            <MinimumDistanceSlider
              setPrices={setPriceValue}
              minPrice={minPrice}
              maxPrice={maxPrice}
              numberOfSlices={numberOfSlices}
              priceValue={priceValue}
            />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <TextField
              label="Mínimo"
              type="number"
              value={priceValue.min}
              onChange={(event) =>
                setPriceValue({
                  ...priceValue,
                  min: parseInt(event.target.value),
                })
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              sx={{
                width: 210,
              }}
            />
            <Box border={1} width={20} height={1} />
            <TextField
              label="Máximo"
              type="number"
              value={priceValue.max}
              onChange={(event) =>
                setPriceValue({
                  ...priceValue,
                  max: parseInt(event.target.value),
                })
              }
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              sx={{
                width: 210,
              }}
            />
          </Box>
        </Box>
      </Menu>
    </>
  );
};

export default PriceFilter;
