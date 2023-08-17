import React, { useState, useEffect } from "react";
import { useImmer } from "use-immer";

import Box from "@mui/material/Box";
import { grey } from "@mui/material/colors";
import TableList from "./index";
import MenuFilter from "../filters/menu-filters";
import MenuChipsFiltered from "../filters/chip-filters";
import {
  category,
  status,
  stock,
} from "../filters/menu-filters/data-menu-filter-options";
import { columns, rows } from "./components/column-definition";
import { handleFilter, updateFilter } from "../filters/helpers";

import { DataFiltersProps, FilterProps } from "../filters/types";

const FilterTableListHooks = () => {
  const [categoryFilter, setCategoryFilter] = useImmer<FilterProps>({
    data: category,
    buttonLabel: "Category",
  });
  const [statusFilter, setStatusFilter] = useImmer<FilterProps>({
    data: status,
    buttonLabel: "Status",
  });
  const [stockFilter, setStockFilter] = useImmer<FilterProps>({
    data: stock,
    buttonLabel: "Stock",
  });

  const [rowsToShow, setRowsToShow] = useState(rows);

  const [selectedFilters, setSelectedFilters] = useState<DataFiltersProps[]>(
    []
  );

  // Sets a click handler to change the label's value
  const categoryFiltered = (filterOption: DataFiltersProps) => {
    handleFilter({
      filteredOption: filterOption,
      filterSetter: setCategoryFilter,
      selectedFilters: selectedFilters,
      setSelectedFilters: setSelectedFilters,
    });
  };

  const statusFiltered = (filterOption: DataFiltersProps) => {
    handleFilter({
      filteredOption: filterOption,
      filterSetter: setStatusFilter,
      selectedFilters: selectedFilters,
      setSelectedFilters: setSelectedFilters,
    });
  };

  const stockFiltered = (filterOption: DataFiltersProps) => {
    handleFilter({
      filteredOption: filterOption,
      filterSetter: setStockFilter,
      selectedFilters: selectedFilters,
      setSelectedFilters: setSelectedFilters,
    });
  };

  const deletedFilter = (filteredOption: DataFiltersProps) => {
    updateFilter({
      filterSetter: setCategoryFilter,
      filteredOption: filteredOption,
      selectedFilters: selectedFilters,
      setSelectedFilters: setSelectedFilters,
    });
    updateFilter({
      filterSetter: setStatusFilter,
      filteredOption: filteredOption,
      selectedFilters: selectedFilters,
      setSelectedFilters: setSelectedFilters,
    });
    updateFilter({
      filterSetter: setStockFilter,
      filteredOption: filteredOption,
      selectedFilters: selectedFilters,
      setSelectedFilters: setSelectedFilters,
    });
  };

  useEffect(() => {
    const newRowtoShow: typeof rows = [];
    if (selectedFilters.length > 0) {
      rows.map((row) => {
        selectedFilters.map((selectedFilter) => {
          if (categoryFilter.buttonLabel === selectedFilter.filterLabel) {
            if (
              row.name.category === selectedFilter.value &&
              !newRowtoShow.includes(row)
            ) {
              newRowtoShow.push(row);
            }
          }
          if (statusFilter.buttonLabel === selectedFilter.filterLabel) {
            if (
              row.status.toLowerCase() === selectedFilter.value &&
              !newRowtoShow.includes(row)
            ) {
              newRowtoShow.push(row);
            }
          }
          if (stockFilter.buttonLabel === selectedFilter.filterLabel) {
            if (
              selectedFilter.value === "available" &&
              row.stock.value > 0 &&
              !newRowtoShow.includes(row)
            ) {
              newRowtoShow.push(row);
            }
            if (
              selectedFilter.value === "outofstock" &&
              row.stock.value <= 0 &&
              !newRowtoShow.includes(row)
            ) {
              newRowtoShow.push(row);
            }
          }
        });
      });
      setRowsToShow(newRowtoShow);
    } else {
      setRowsToShow(rows);
    }
  }, [selectedFilters]);

  return (
    <Box>
      <MenuChipsFiltered
        selectedFilters={selectedFilters}
        deletedFilter={deletedFilter}
      >
        <>
          <MenuFilter filters={categoryFilter} setFilters={categoryFiltered} />
          <MenuFilter filters={statusFilter} setFilters={statusFiltered} />
          <MenuFilter filters={stockFilter} setFilters={stockFiltered} />
        </>
      </MenuChipsFiltered>
      <Box maxWidth={"100%"} overflow={"auto"}>
        <TableList
          rows={rowsToShow}
          columns={columns}
          rowsPerPagePagination={5}
          sx={{
            minWidth: 1200,
            ".MuiTableHead-root": {
              backgroundColor: grey[200],
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default FilterTableListHooks;
