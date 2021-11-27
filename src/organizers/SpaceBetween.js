import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Space = styled.div`
  margin: ${(props) => props.spaceSize};
`;

export default function SpaceBetween(props) {
  let children = [];
  children.push(props.children[0]);
  children.push(<Space spaceSize={props.spaceSize} />);
  children.push(props.children[1]);

  return <MainContainer>{children}</MainContainer>;
}

SpaceBetween.propTypes = {
  spaceSize: PropTypes.string,
};

SpaceBetween.defaultProps = {
  spaceSize: "10px",
};
