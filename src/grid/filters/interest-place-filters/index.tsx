import React, { useState } from "react";

import "mapbox-gl/dist/mapbox-gl.css";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { SxProps } from '@mui/material/styles';

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import InterestPlaces from "../../../molecules/InterestPlaces";

export interface LocationSelectedProps {
  longitude: number;
  latitude: number;
  zoom: number;
  address: string;
}

interface InterestPlacesProps {
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
  sx
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
      <Button
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
        sx={{
          textTransform: "none",
          color: (theme) => theme.palette.grey[800],
          marginRight: 2,
        }}
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
