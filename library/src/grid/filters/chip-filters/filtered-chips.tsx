import React from "react";
import Chip from "@mui/material/Chip";
import { ChipFilterProps, DataFiltersProps } from "../types";

const FilteredChips = ({ filters, deletedFilter }: ChipFilterProps) => {
  const handleDelete = (filteredOption: DataFiltersProps) => {
    deletedFilter(filteredOption);
  };

  return (
    <Chip
      key={filters.value}
      label={`${filters.filterLabel}: ${filters.label}`}
      sx={{ marginRight: 1 }}
      onDelete={() => handleDelete(filters)}
    />
  );
};

export default FilteredChips;
