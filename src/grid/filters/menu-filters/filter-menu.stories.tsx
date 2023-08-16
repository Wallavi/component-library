import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useImmer } from "use-immer";
import MenuFilter from "./index";
import { category, status, stock } from "./data-menu-filter-options";
import { handleFilter } from "../helpers";

import { DataFiltersProps, FilterProps } from "../types";

const meta: Meta<typeof MenuFilter> = {
  component: MenuFilter,
};
export default meta;

type Story = StoryObj<typeof MenuFilter>;

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

  // Sets a click handler to change the label's value
  const categoryFiltered = (filterOption: DataFiltersProps) => {
    handleFilter({
      filterOption: filterOption,
      filterSetter: setCategoryFilter,
      selectedFilters: selectedFilters,
      setSelectedFilters: setSelectedFilters,
    });
  };

  const statusFiltered = (filterOption: DataFiltersProps) => {
    handleFilter({
      filterOption: filterOption,
      filterSetter: setStatusFilter,
      selectedFilters: selectedFilters,
      setSelectedFilters: setSelectedFilters,
    });
  };

  const stockFiltered = (filterOption: DataFiltersProps) => {
    handleFilter({
      filterOption: filterOption,
      filterSetter: setStockFilter,
      selectedFilters: selectedFilters,
      setSelectedFilters: setSelectedFilters,
    });
  };

  return (
    <>
      <MenuFilter filters={categoryFilter} setFilters={categoryFiltered} />
      <MenuFilter filters={statusFilter} setFilters={statusFiltered} />
      <MenuFilter filters={stockFilter} setFilters={stockFiltered} />
    </>
  );
};

export const Primary: Story = {
  render: () => <FilterMenuHooks />,
};
