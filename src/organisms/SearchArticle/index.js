import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Fuse from "fuse.js";

import List from "../List";
import Input from "../../atoms/Input";
import ListItem from "../../molecules/ListItem";

const MainContainer = styled.div`
  position: relative;
  width: ${({ width }) => width};
`;

const AbsoluteContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 70px;
  left: 0px;
  z-index: 2;
`;

export default function SearchArticle(props) {
  const [focused, setFocusedState] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [fuse, setFuseState] = useState(null);
  const [possiblySelectedItem, setPossiblySelectedItemState] = useState(0);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
    setFocusedState(true);
  };

  const handleOnKeyUp = (e) => {
    setFocusedState(true);
    if (e.key === "Enter" && filteredItems.length > 0) {
      props.onSelect(filteredItems[possiblySelectedItem]);
      setInputValue("");
      setFocusedState(false);
    }
    if (e.key === "ArrowUp" && possiblySelectedItem >= 1) {
      setPossiblySelectedItemState(possiblySelectedItem - 1);
    }
    if (
      e.key === "ArrowDown" &&
      possiblySelectedItem < filteredItems.length - 1
    ) {
      setPossiblySelectedItemState(possiblySelectedItem + 1);
    }
  };

  const handleInputOnClick = () => {
    setFocusedState(true);
  };

  const handleDropdownOnClick = (data) => {
    props.onSelect(filteredItems[possiblySelectedItem]);
    setInputValue("");
    setFocusedState(false);
  };

  useEffect(() => {
    /**
     * Setup fuzzy matching
     * 1. Set items to search
     * 2. Set matching configuration
     */
    let items = [
      ...props.listItems.map((e) => e.mainData),
      ...props.listItems.map((e) => e.secondaryData),
    ];

    const configureMatching = (items) => {
      const options = {
        includeScore: true,
        threshold: 0.3,
        distance: 500,
      };

      return new Fuse(items, options);
    };

    setFuseState(configureMatching(items));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (inputValue) {
      let result = fuse.search(inputValue);

      const tempItems = {};
      result.forEach((element) => {
        props.listItems.forEach((e) => {
          if (e.mainData === element.item || e.secondaryData === element.item) {
            tempItems[e.id] = e;
          }
        });
      });

      setFilteredItems(Object.values(tempItems));
    } else {
      setFilteredItems(props.listItems);
      setPossiblySelectedItemState(0);
    }
  }, [fuse, inputValue, props.listItems]);

  return (
    <MainContainer width={props.width}>
      <Input
        label={props.label}
        value={inputValue}
        onFocus={() => setFocusedState(true)}
        onBlur={(e) => {
          setTimeout(() => {
            setFocusedState(false);
          }, 0);
        }}
        handleKeyUp={handleOnKeyUp}
        handleChange={handleOnChange}
        onClick={handleInputOnClick}
      />
      {focused && (
        <AbsoluteContainer>
          <List
            listItems={filteredItems}
            handleClick={handleDropdownOnClick}
            highlight={possiblySelectedItem}
            handleMouseOver={(index) => setPossiblySelectedItemState(index)}
          />
        </AbsoluteContainer>
      )}
    </MainContainer>
  );
}

SearchArticle.propTypes = {
  label: PropTypes.string,
  listItems: PropTypes.arrayOf(PropTypes.shape(ListItem.propTypes)).isRequired,
  onSelect: PropTypes.func.isRequired,
};
