import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useImmer } from "use-immer";
import { MenuSearchFilter } from "@wallavi/component-library";
import { category } from "../menu-filters/data-menu-filter-options";
import { handleFilter } from "../helpers";

import { DataFiltersProps, FilterProps } from "../types";

const meta: Meta<typeof MenuSearchFilter> = {
  title: "Grid/filters/MenuSearchFilter",
  component: MenuSearchFilter,
  argTypes: {
    filters: { data: { type: { data: "array" } } },
    setFilters: { type: "function" },
  },
};
export default meta;

type Story = StoryObj<typeof MenuSearchFilter>;

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
      <MenuSearchFilter
        filters={categoryFilter}
        setFilters={categoryFiltered}
      />
    </>
  );
};

export const Primary: Story = {
  render: () => <FilterMenuHooks />,
};
