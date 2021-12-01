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
  const items = props.listItems.map((e) => (
    <ListItem
      source={e.source}
      mainData={e.mainData}
      secondaryData={e.secondaryData}
      onClick={props.onClick}
    ></ListItem>
  ));

  return (
    <MainContainer {...props}>
      {props.listItems.length >= 1 ? items : <EmptyList />}
    </MainContainer>
  );
}

List.propTypes = {
  width: PropTypes.string,
  listItems: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.string.isRequired,
      mainData: PropTypes.string,
      secondaryData: PropTypes.string,
    })
  ),
};

List.defaultProps = {
  width: "100%",
};
