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

const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
`;

export default function SpaceBetween(props) {
  let leftChild = props.children[0];
  let rightChild = [];

  if (props.children[2]) {
    rightChild.push(props.children[1]);
    rightChild.push(props.children[2]);
  } else {
    rightChild.push(props.children[1]);
  }

  return (
    <MainContainer>
      <Container>{leftChild}</Container>
      <Space key="space" spaceSize={props.spaceSize} />
      <Container>{rightChild}</Container>
    </MainContainer>
  );
}

SpaceBetween.propTypes = {
  spaceSize: PropTypes.string,
};

SpaceBetween.defaultProps = {
  spaceSize: "10px",
};
