import React, { useState } from "react";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Checkbox from '@mui/material/Checkbox';


import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { MenuFilterProps, DataFiltersProps } from "../types";

/**
 * Renders a MenuFilter around some data.
 *
 * ```tsx
 * const FilterMenuHooks = () => {
 *   const [categoryFilter, setCategoryFilter] = useImmer<FilterProps>({
 *     data: category,
 *     buttonLabel: "Category",
 *   });
    const [selectedFilters, setSelectedFilters] = useState<DataFiltersProps[]>(
      []
    );

    // Sets a click handler to change the categoryFilter and selectedFilters value
    const categoryFiltered = (filterOption: DataFiltersProps) => {
      handleFilter({
        filteredOption: filterOption,
        filterSetter: setCategoryFilter,
        selectedFilters: selectedFilters,
        setSelectedFilters: setSelectedFilters,
      });
    };

    return (
      <MenuFilter filters={categoryFilter} setFilters={categoryFiltered} />
    );
  };
 * ```
 *
 * The data should be something like this
 *
 * ```
  export const category = [
    {
      value: 'healthcare',
      label: 'Healthcare',
      selected: false,
    },
    {
      value: 'makeup',
      label: 'Makeup',
      selected: false,
    },
    {
      value: 'dress',
      label: 'Dress',
      selected: false,
    },
    {
      value: 'skincare',
      label: 'Skincare',
      selected: false,
    },
    {
      value: 'jewelry',
      label: 'Jewelry',
      selected: false,
    },
  ];
 * ```
 *
 *
 * @category Component
 */

const MenuFilter = ({ setFilters, filters }: MenuFilterProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (
    option?: DataFiltersProps,
  ) => {
    if (option) {
      setFilters(option);
    }
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
        sx={{
          textTransform: "none",
          color: (theme) => theme.palette.primary.dark,
          marginRight: 2,
        }}
      >
        {filters.buttonLabel}
      </Button>
      <Menu
        id="category-menu"
        MenuListProps={{
          "aria-labelledby": "category-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => handleClose()}
        // PaperProps={{
        //   style: {
        //     maxHeight: ITEM_HEIGHT * 4.5,
        //     width: '20ch',
        //   },
        // }}
      >
        {filters.data.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.selected}
            onClick={() =>
              handleClose({ ...option, filterLabel: filters.buttonLabel })
            }
            sx={{
              paddingLeft: 2,
              paddingRight: 4,
              paddingY: 1,
            }}
          >
            <Checkbox
              checked={option.selected}
              // onChange={() => handleClose({ ...option, filterLabel: filters.buttonLabel })}
              inputProps={{ 'aria-label': `${option.label}` }}
            />

            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuFilter;
