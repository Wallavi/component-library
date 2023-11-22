
export interface DataFiltersProps {
  value: string;
  label: string;
  selected: boolean;
  filterLabel?: string; // Added filterLabel property
}

export interface FilterProps {
  data: DataFiltersProps[];
  buttonLabel: string;
}

export type SetFilters = (
  recipe: (draft: FilterProps) => void | FilterProps
) => void;

/**
 * The props type for {@link MenuFilter}
 */

export interface MenuFilterProps {
  setFilters: (value: DataFiltersProps) => void
  filters: FilterProps
}

export interface ChipFilterProps {
  filters: DataFiltersProps;
  deletedFilter: (current: DataFiltersProps) => void
}

/**
 * The props type for {@link MenuChipsFiltered}
 */

export interface MenuChipsFilterProps {
  selectedFilters: DataFiltersProps[]
  deletedFilter: (state: DataFiltersProps) => void
  children: React.ReactNode;
  filtersAppliedText?: string;
}