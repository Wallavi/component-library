import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Step from "../atoms/Step";
import Button from "../atoms/Button";

const MainContainer = styled.div`
  position: fixed;
  width: 450px;
  border-radius: 10px;
  left: 50%;
  top: 50%;
  background: white;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 20px;
`;

const Title = styled.p`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px 0px;
  width: 100%;
`;

export default function Edition(props) {
  const handleClick = (index) => {
    if (typeof index === "number") {
      props.handleClick(index);
    } else {
      props.handleClick(props.selected + 1);
    }
  };

  return (
    <MainContainer {...props} id="mainContainer">
      <Title>{props.title}</Title>
      {props.steps.length !== 0 ? (
        <Step
          selected={props.selected}
          steps={props.steps}
          handleClick={handleClick}
        />
      ) : null}

      {props.children && props.children[props.selected]}

      <Button
        margin="15px 0 0 0"
        label="Continuar"
        size="BIG"
        onClick={handleClick}
      ></Button>
    </MainContainer>
  );
}

Edition.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.number,
  steps: PropTypes.array,
  children: PropTypes.arrayOf(PropTypes.element),
  handleClick: PropTypes.func,
};

Edition.defaultProps = {
  selected: 0,
  steps: [],
};
