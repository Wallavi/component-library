import React from "react";

import FilteredChips from "./filtered-chips";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import { MenuChipsFilterProps } from "../types";

const MenuChipsFiltered = ({
  deletedFilter,
  selectedFilters,
  children,
}: MenuChipsFilterProps) => {
  return (
    <>
      <Box height={56} display="flex" alignItems="center" marginX={2}>
        {selectedFilters.length > 0
          ? selectedFilters.map((selectedFilter) => (
              <FilteredChips
                key={`${selectedFilter.value}-FilteredChips`}
                filters={selectedFilter}
                deletedFilter={deletedFilter}
              />
            ))
          : "No filters applied"}
      </Box>
      <Divider />
      <Box paddingY={2}>{children}</Box>
    </>
  );
};

export default MenuChipsFiltered;
