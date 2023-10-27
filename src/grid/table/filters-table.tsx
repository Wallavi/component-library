import React, { useState, useEffect } from "react";
import { useImmer } from "use-immer";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { grey } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";

import TableList from "./index";
import MenuFilter from "../filters/menu-filters";
import MenuChipsFiltered from "../filters/chip-filters";
import PriceFilter from "../filters/price-filters";
import {
  category,
  status,
  stock,
} from "../filters/menu-filters/data-menu-filter-options";
import { columns, rows } from "./components/column-definition";
import { handleFilter, updateFilter } from "../filters/helpers";

import { DataFiltersProps, FilterProps } from "../filters/types";
import Fuse from "fuse.js";

const FilterTableListHooks = () => {
  const dataHousePrices = rows.map((row) => row.price);
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
  const [pricesFilter, setPricesFilter] = useState({ min: 0, max: 0 });
  const [search, setSearch] = useState("");

  const [rowsToShow, setRowsToShow] = useState(rows);

  const [selectedFilters, setSelectedFilters] = useState<DataFiltersProps[]>(
    []
  );

  const getFilterPrices = (valuePrices: { max: number; min: number }) => {
    setPricesFilter(valuePrices);
    const updateFilterPrices = selectedFilters.find(
      (filter) => filter.filterLabel === "Prices"
    );
    if (updateFilterPrices) {
      const newFilterPrices = selectedFilters?.map((filter) => {
        if (filter.filterLabel === "Prices") {
          return {
            ...filter,
            label: `$${valuePrices.min} - $${valuePrices.max}`,
            value: `$${valuePrices.min} - $${valuePrices.max}`,
          };
        } else {
          return filter;
        }
      });
      setSelectedFilters(newFilterPrices);
    } else if (pricesFilter.min > 0 || pricesFilter.max > 0) {
      setSelectedFilters([
        ...selectedFilters,
        {
          value: `$${valuePrices.min} - $${valuePrices.max}`,
          label: `$${valuePrices.min} - $${valuePrices.max}`,
          filterLabel: "Prices",
          selected: true,
        },
      ]);
    }
  };

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

  const searchFiltered = (searchValue: string) => {
    const updateFilterSearch = selectedFilters.find(
      (filter) => filter.filterLabel === "Search"
    );
    if (searchValue) {
      if (updateFilterSearch) {
        const newFilterSearch = selectedFilters?.map((filter) => {
          if (filter.filterLabel === "Search") {
            return {
              ...filter,
              value: searchValue.toLowerCase(),
              label: searchValue,
            };
          } else {
            return filter;
          }
        });
        setSelectedFilters(newFilterSearch);
      } else {
        setSelectedFilters([
          ...selectedFilters,
          {
            value: searchValue.toLowerCase(),
            label: searchValue,
            filterLabel: "Search",
            selected: true,
          },
        ]);
      }
    } else if (updateFilterSearch) {
      const newFilterSearch = selectedFilters?.filter(
        (filter) => filter.filterLabel !== "Search"
      );
      setSelectedFilters(newFilterSearch);
    }
  };

  const deletedFilter = (filteredOption: DataFiltersProps) => {
    updateFilter({
      filterSetter: setCategoryFilter,
      filteredOption: filteredOption,
    });
    updateFilter({
      filterSetter: setStatusFilter,
      filteredOption: filteredOption,
    });
    updateFilter({
      filterSetter: setStockFilter,
      filteredOption: filteredOption,
    });
    const updatedFilters = selectedFilters.filter(
      (filter) => filter.value !== filteredOption.value
    );
    setSelectedFilters(updatedFilters);
  };

  const handleKeyDown = (value: string) => {
    setSearch(value);
    searchFiltered(value);
  };

  useEffect(() => {
    const options = {
      keys: ["name.value"],
    };
    const fuse = new Fuse(rows, options);
    const newRowtoShow: typeof rows = [];

    if (selectedFilters.length > 0) {
      selectedFilters.forEach((selectedFilter) => {
        if (selectedFilter.filterLabel === "Search") {
          if (selectedFilter.value) {
            fuse.search(selectedFilter.value).forEach((result) => {
              if (!newRowtoShow.includes(result.item)) {
                newRowtoShow.push(result.item);
              }
            });
          }
        }
      });
    }
    if (selectedFilters.length > 0) {
      rows.forEach((row) => {
        selectedFilters.forEach((selectedFilter) => {
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
          if (selectedFilter.filterLabel === "Prices") {
            if (
              row.price >= pricesFilter.min &&
              row.price <= pricesFilter.max &&
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
  }, [
    selectedFilters,
    categoryFilter.buttonLabel,
    statusFilter.buttonLabel,
    stockFilter.buttonLabel,
    pricesFilter,
  ]);

  return (
    <Box>
      <TextField
        id="search-by-name"
        placeholder="Buscar por nombre"
        value={search}
        onChange={(e) => handleKeyDown(e.target.value)}
        // onKeyDown={handleKeyDown}
        // onKeyUp={handleKeyDown}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
        fullWidth
        sx={{
          ".MuiInput-root": {
            paddingY: 1,
          },
        }}
        autoComplete="off"
      />
      <MenuChipsFiltered
        selectedFilters={selectedFilters}
        deletedFilter={deletedFilter}
      >
        <>
          <MenuFilter filters={categoryFilter} setFilters={categoryFiltered} />
          <MenuFilter filters={statusFilter} setFilters={statusFiltered} />
          <MenuFilter filters={stockFilter} setFilters={stockFiltered} />
          <PriceFilter
            buttonLabel="Price"
            prices={dataHousePrices}
            getFilterPrices={getFilterPrices}
          />
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
