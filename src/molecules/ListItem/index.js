import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Avatar from "../../atoms/Avatar";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${(props) =>
    props.highlight ? "rgba(256, 256, 256, 0.4)" : null};
  padding: 5px;
  border-radius: 8px;
  margin: 3px 0;
  cursor: pointer;
`;

const Data = styled.div`
  margin-left: 10px;
  p {
    color: white;
  }
  p:nth-child(1) {
    font-weight: 500;
    white-space: nowrap;
  }
  p:nth-child(2) {
    font-size: 13px;
    white-space: nowrap;
  }
`;

export default function ListItem(props) {
  return (
    <MainContainer {...props}>
      <Avatar source={props.source} radius="8px" />
      <Data>
        <p>{props.mainData}</p>
        <p>{props.secondaryData}</p>
      </Data>
    </MainContainer>
  );
}

ListItem.propTypes = {
  source: PropTypes.string.isRequired,
  mainData: PropTypes.string.isRequired,
  secondaryData: PropTypes.string.isRequired,
  highlight: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
