import React from "react";

import FilteredChips from "./filtered-chips";

import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { MenuChipsFilterProps } from "../types";

import { useThemeContext } from "../../../theme/wrapper";
import { ThemeProvider } from "@mui/material/styles";

/**
  * MenuChipsFiltered code example.

  * ```tsx
  const FilterMenuHooks = () => {
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

    const [selectedFilters, setSelectedFilters] = useState<DataFiltersProps[]>(
      []
    );

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

    return (
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
    );
  };
  ```
  * helpers here {@link handleFilter}, {@link updateFilter}
  * Menu filter component {@link MenuFilter}
  * @category Component
*/

const MenuChipsFiltered = ({
  deletedFilter,
  selectedFilters,
  children,
  filtersAppliedText,
}: MenuChipsFilterProps) => {
  const { theme } = useThemeContext();
  return (
    <ThemeProvider theme={theme}>
      <Box height={56} display="flex" alignItems="center" marginX={2}>
        {selectedFilters.length > 0 ? (
          selectedFilters.map((selectedFilter) => (
            <FilteredChips
              key={`${selectedFilter.value}-FilteredChips`}
              filters={selectedFilter}
              deletedFilter={deletedFilter}
            />
          ))
        ) : filtersAppliedText ? (
          filtersAppliedText
        ) : (
          <Typography>No hay filtros aplicados</Typography>
        )}
      </Box>
      <Divider />
      <Box paddingY={2}>{children}</Box>
    </ThemeProvider>
  );
};

export default MenuChipsFiltered;
