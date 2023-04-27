import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../../colorPalette";

import EmptyList from "../../atoms/labels/UpperImage";
import Thumbnail from "../../atoms/Thumbnail";

const MainContainer = styled.div`
  width: ${(props) => props.width || `100%`};
  max-height: 140px;
  border: 1px solid ${colors.secondaryMiddleBlue};
  border-radius: 8px;
  box-sizing: border-box;
  overflow-y: auto;
  margin: 8px 0;
`;

const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 55px;
  border-bottom: 1px solid ${colors.secondaryMiddleBlue};
  box-sizing: border-box;
  padding: 0 15px;
  &:last-child {
    border-bottom: 0px;
  }
  & > figure {
    width: 40px;
    height: 40px;
    margin-right: 15px;
    & > img {
      border-radius: 50%;
    }
  }
`;

const DeleteBtn = styled.div`
  position: absolute;
  top: calc(50%-20px);
  right: 25px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isRemoved ? props.colors.primaryBlue : props.colors.primaryRed};
  width: 20px;
  height: 20px;
  color: ${(props) => props.colors.neutral_0};
  text-align: center;
  line-height: 20px;
  cursor: pointer;
`;

export default function ListTable(props) {
  const [itemHover, setItemHover] = useState(-1);
  const items = props.listItems.map((item, index) => (
    <Item
      key={item.id || index}
      onMouseEnter={() => setItemHover(index)}
      onMouseLeave={() => setItemHover(-1)}
    >
      <Thumbnail source={item.src} />
      {item.name}
      {itemHover === index && (
        <DeleteBtn onClick={() => props.handleClick(item)} colors={colors}>
          <span>&#9747;</span>
        </DeleteBtn>
      )}
    </Item>
  ));

  return (
    <MainContainer width={props.width}>
      {props.listItems.length >= 1 ? items : <EmptyList />}
    </MainContainer>
  );
}

ListTable.propTypes = {
  width: PropTypes.string,
  listItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  handleClick: PropTypes.func.isRequired,
};

ListTable.defaultProps = {
  width: "100%",
};
