import React, { useState, useEffect } from "react";

import Histogram from "./price-histogram";
import MinimumDistanceSlider from "./price-slider";

import Menu from "@mui/material/Menu";
import FilterButton from "../../../atoms/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { useThemeContext } from "../../../theme/wrapper";
import { ThemeProvider } from "@mui/material/styles";

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
  const { theme } = useThemeContext();
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

  const onChange = (e: React.ChangeEvent<HTMLElement>, type: string) => {
    e.preventDefault();
    const newValue: number = parseInt(e.target.value || "0");
    if (newValue >= 0 && newValue <= maxPrice)
      setPriceValue({ ...priceValue, [`${type}`]: newValue });
  };

  useEffect(() => {
    getFilterPrices(priceValue);
  }, [priceValue]);

  return (
    <ThemeProvider theme={theme}>
      <FilterButton onClick={handleClick} endIcon={<ArrowDropDownIcon />}>
        {buttonLabel}
      </FilterButton>
      <Menu
        id="category-menu"
        MenuListProps={{
          "aria-labelledby": "category-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        onKeyDown={(e) => e.stopPropagation()}
        sx={{ "& .MuiList-root": { padding: "0" } }}
      >
        <Box width={600} padding={2} onKeyDown={(e) => e.stopPropagation()}>
          <Box display={"flex"} justifyContent={"center"}>
            <Histogram
              data={prices}
              width={600}
              height={70}
              maxPrice={maxPrice}
              minPrice={minPrice}
              numberOfSlices={numberOfSlices}
              priceValue={priceValue}
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
            marginTop={"40px"}
          >
            <TextField
              label="Mínimo"
              type="number"
              value={priceValue.min}
              onChange={(e) => onChange(e, "min")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              sx={{
                flex: 1,
              }}
            />
            <Box
              border={1}
              width={20}
              height={1}
              marginLeft={"10px"}
              marginRight={"10px"}
            />
            <TextField
              label="Máximo"
              type="number"
              value={priceValue.max}
              onChange={(e) => onChange(e, "max")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              sx={{
                flex: 1,
              }}
            />
          </Box>
        </Box>
      </Menu>
    </ThemeProvider>
  );
};

export default PriceFilter;
