import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../../colorPalette";

const MainContainer = styled.button`
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border-radius: 100px;
  margin: ${(props) => props.margin};
  padding: ${(props) => (props.size === "BIG" ? "15px 25px" : "10px 20px")};
  font-weight: ${(props) => (props.size === "BIG" ? 400 : 500)};
  border: none;
`;

export default function Button(props) {
  return (
    <MainContainer {...props} onClick={props.onClick}>
      {props.label}
    </MainContainer>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(["SMALL", "BIG"]),
  onClick: PropTypes.func.isRequired,
  margin: PropTypes.string,
};

Button.defaultProps = {
  label: "Continuar",
  color: "white",
  bgColor: colors.primaryDarkBlue,
  size: "SMALL",
  margin: "0px",
};
