import { DataFiltersProps, SetFilters } from "./types";

/**
 * The props type for {@link updateFilter} and {@link handleFilter}.
 */

export interface HelperFilterProps {
  filterSetter: SetFilters;
  filteredOption: DataFiltersProps;
  selectedFilters?: DataFiltersProps[];
  setSelectedFilters?: (param: DataFiltersProps[]) => void;
}

export const updateFilter = ({
  filterSetter,
  filteredOption,
}: HelperFilterProps) => {
  filterSetter((draft) => {
    const findOption = draft.data.find(
      (option) => option.value === filteredOption.value
    );
    if (findOption) {
      findOption.selected = false;
    }
  });
};

export const handleFilter = ({
  filteredOption,
  filterSetter,
  selectedFilters,
  setSelectedFilters,
}: HelperFilterProps) => {
  filterSetter((draft) => {
    const findOption = draft.data.find(
      (option) => option.value === filteredOption.value
    );
    if (findOption) {
      findOption.selected = !filteredOption.selected;
    }
  });

  const newSelectedFilter = selectedFilters?.find(
    (filter) => filter.value === filteredOption.value
  );
  if (!newSelectedFilter && selectedFilters && setSelectedFilters) {
    setSelectedFilters([...selectedFilters, filteredOption]);
  } else {
    const updatedFilters = selectedFilters?.filter(
      (filter) => filter.value !== filteredOption.value
    );
    if (setSelectedFilters && updatedFilters) {
      setSelectedFilters(updatedFilters);
    }
  }
};
