import { DataFiltersProps, SetFilters } from "./types";

interface UpdateFilterProps {
  filterSetter: SetFilters;
  filteredOption: DataFiltersProps;
  selectedFilters: DataFiltersProps[];
  setSelectedFilters: (param: DataFiltersProps[]) => void;
}

interface HandleFilterProps {
  filterOption: DataFiltersProps;
  filterSetter: SetFilters;
  selectedFilters: DataFiltersProps[];
  setSelectedFilters: (param: DataFiltersProps[]) => void;
}

export const updateFilter = ({
  filterSetter,
  filteredOption,
  selectedFilters,
  setSelectedFilters,
}: UpdateFilterProps) => {
  filterSetter((draft) => {
    const findOption = draft.data.find(
      (option) => option.value === filteredOption.value
    );
    if (findOption) {
      findOption.selected = false;
    }
  });

  const updatedFilters = selectedFilters.filter(
    (filter) => filter.value !== filteredOption.value
  );
  setSelectedFilters(updatedFilters);
};

export const handleFilter = ({
  filterOption,
  filterSetter,
  selectedFilters,
  setSelectedFilters,
}: HandleFilterProps) => {
  filterSetter((draft) => {
    const findOption = draft.data.find(
      (option) => option.value === filterOption.value
    );
    if (findOption) {
      findOption.selected = !filterOption.selected;
    }
  });

  const newSelectedFilter = selectedFilters.find(
    (filter) => filter.value === filterOption.value
  );
  if (!newSelectedFilter) {
    setSelectedFilters([...selectedFilters, filterOption]);
  } else {
    const updatedFilters = selectedFilters.filter(
      (filter) => filter.value !== filterOption.value
    );
    setSelectedFilters(updatedFilters);
  }
};
