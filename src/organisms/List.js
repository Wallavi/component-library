import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ListItem from "../molecules/ListItem";
import EmptyList from "../atoms/labels/UpperImage";

const MainContainer = styled.div`
  width: ${(props) => props.width};
  min-height: 30px;
  max-height: 200px;
  overflow-y: scroll;
  border-radius: 10px;
  background: #323946;
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.4);
  padding: 8px 10px;
`;

export default function List(props) {
  const items = props.listItems.map((item, index) => (
    <ListItem
      source={item.source}
      mainData={item.mainData}
      secondaryData={item.secondaryData}
      key={item.id}
      onClick={() => props.handleClick(item)}
      onMouseOver={() => props.onMouseOver(index)}
      highlight={index === props.highlight ? true : false}
    ></ListItem>
  ));

  return (
    <MainContainer width={props.width}>
      {props.listItems.length >= 1 ? items : <EmptyList />}
    </MainContainer>
  );
}

List.propTypes = {
  width: PropTypes.string,
  highlight: PropTypes.number,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      mainData: PropTypes.string,
      secondaryData: PropTypes.string,
    })
  ),
  onMouseOver: PropTypes.func,
  handleClick: PropTypes.func,
};

List.defaultProps = {
  width: "100%",
};
