import React, { useEffect, useState } from "react";

import Fuse from "fuse.js";

import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { MenuFilterProps, DataFiltersProps, FilterProps } from "../types";

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
      <MenuSearchFilter filters={categoryFilter} setFilters={categoryFiltered} />
    );
  };
 * ```
 * handleFilter helper is here {@link handleFilter}
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

const MenuSearchFilter = ({ setFilters, filters }: MenuFilterProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [search, setSearch] = useState("");
  const [searchFilters, setSearchFilters] = useState<FilterProps>(filters);
  const open = Boolean(anchorEl);

  const options = {
    keys: ["value"],
  };

  const fuse = new Fuse(searchFilters.data, options);

  useEffect(() => {
    setSearchFilters(filters);
  }, [filters]);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option?: DataFiltersProps) => {
    if (option) {
      setFilters(option);
      setSearch("");
    }
    setAnchorEl(null);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    const filteredData = value
      ? fuse.search(value).map((result) => result.item)
      : filters.data;
    setSearchFilters({ ...searchFilters, data: filteredData });
  };

  return (
    <>
      <Button
        onClick={handleClick}
        endIcon={<ExpandMoreIcon />}
        sx={{
          textTransform: "none",
          color: (theme) => theme.palette.grey[800],
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
        onKeyDown={(e) => e.stopPropagation()}
        autoFocus={false}
        // PaperProps={{
        //   style: {
        //     maxHeight: ITEM_HEIGHT * 4.5,
        //     width: '20ch',
        //   },
        // }}
      >
        <Box margin={1} onKeyDown={(e) => e.stopPropagation()}>
          <TextField
            label={"Buscador"}
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Box>
        {searchFilters.data.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.selected}
            onClick={() =>
              handleClose({ ...option, filterLabel: searchFilters.buttonLabel })
            }
            sx={{
              paddingLeft: 2,
              paddingRight: 4,
              paddingY: 1,
            }}
            autoFocus={false}
          >
            <Checkbox
              checked={option.selected}
              // onChange={() => handleClose({ ...option, filterLabel: filters.buttonLabel })}
              inputProps={{ "aria-label": `${option.label}` }}
            />

            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default MenuSearchFilter;
