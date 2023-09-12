import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useImmer } from "use-immer";
import MenuFilter from "./index";
import { category } from "../menu-filters/data-menu-filter-options";
import { handleFilter } from "../helpers";

import { DataFiltersProps, FilterProps } from "../types";

const meta: Meta<typeof MenuFilter> = {
  component: MenuFilter,
  argTypes: {
    filters: { data: { type: { data: "array" } } },
    setFilters: { type: "function" },
  },
};
export default meta;

type Story = StoryObj<typeof MenuFilter>;

const FilterMenuHooks = () => {
  const [categoryFilter, setCategoryFilter] = useImmer<FilterProps>({
    data: category,
    buttonLabel: "Category",
  });

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

  return (
    <>
      <MenuFilter filters={categoryFilter} setFilters={categoryFiltered} />
    </>
  );
};

export const Primary: Story = {
  render: () => <FilterMenuHooks />,
};
