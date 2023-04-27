import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../../colorPalette";
import img from "../../assets/helper.svg";

const MainContainer = styled.div`
  position: relative;
  cursor: pointer;
  min-width: 25px;
  max-width: 25px;
  height: 25px;
  margin: 15px;
`;

const Icon = styled.figure`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`;

const HelperContainer = styled.p`
  position: absolute;
  width: max-content;
  max-width: 400px;
  padding: 15px;
  background: ${(props) => props.colors.neutral_2};
  box-shadow: rgb(0 0 0 / 10%) -2px 4px 5px 1px;
  border-radius: 6px;
  transform: translate(-90%, 0);
  top: 50px;
  z-index: 1000000000;
`;

export default function Input(props) {
  const [boxVisibility, setVisibility] = useState(false);

  return (
    <MainContainer>
      <Icon
        colors={colors}
        onMouseEnter={() => setVisibility(true)}
        onMouseLeave={() => setVisibility(false)}
      >
        <img src={img} alt="Helpbox"></img>
      </Icon>
      {boxVisibility && (
        <HelperContainer colors={colors}>{props.label}</HelperContainer>
      )}
    </MainContainer>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
};
