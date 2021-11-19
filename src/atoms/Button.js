import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MainContainer = styled.button`
  background: ${(props) => props.bgColor};
  color: ${(props) => props.color};
  border-radius: 100px;
  padding: ${(props) => (props.size === "BIG" ? "15px 25px" : "10px 20px")};
  font-weight: ${(props) => (props.size === "BIG" ? 400 : 500)};
  border: none;
`;

export default function Button(props) {
  return (
    <MainContainer {...props} onClick={props.onClick}>
      {props.text}
    </MainContainer>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  size: PropTypes.oneOf(["SMALL", "BIG"]),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  text: "Continuar",
  color: "white",
  bgColor: "#323946",
  size: "SMALL",
};
