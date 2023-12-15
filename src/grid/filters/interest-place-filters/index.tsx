import React, { useState } from "react";

import "mapbox-gl/dist/mapbox-gl.css";

import {ButtonProps} from "@mui/material/Button";
import FilterButton from "../../../atoms/Button";
import Menu from "@mui/material/Menu";
import { SxProps } from '@mui/material/styles';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import InterestPlaces from "../../../molecules/InterestPlaces";

export interface LocationSelectedProps {
  longitude: number;
  latitude: number;
  zoom: number;
  address: string;
}

interface InterestPlacesProps extends ButtonProps {
  buttonLabel: string;
  longitude: number;
  latitude: number;
  zoom: number;
  address?: string;
  locationSelected: (value: LocationSelectedProps) => void;
  sx?: SxProps;
}

const InterestPlacesFilters = ({
  buttonLabel,
  longitude,
  latitude,
  zoom,
  address,
  locationSelected,
  sx,
  ...rest
}: InterestPlacesProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <FilterButton
        onClick={handleClick}
        endIcon={<ArrowDropDownIcon />}
        {...rest}
      >
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
      >
        <InterestPlaces 
          longitude={longitude}
          latitude={latitude}
          zoom={zoom}
          address={address}
          locationSelected={locationSelected}
          sx={sx}
        />
      </Menu>
    </>
  );
};

export default InterestPlacesFilters;
