import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import logo from "../assets/logo.svg";
import whiteLogo from "../assets/whiteLogo.svg";

const MainContainer = styled.figure`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 100%;
  }
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "0px")};
`;

export default function Logo(props) {
  const source = props.type === "MAIN" ? logo : whiteLogo;

  return (
    <MainContainer {...props}>
      <img src={source} alt="Content-oh Brand"></img>
    </MainContainer>
  );
}

Logo.propTypes = {
  type: PropTypes.oneOf(["MAIN", "WHITE"]),
  width: PropTypes.string,
  margin: PropTypes.string,
};

Logo.defaultProps = {
  type: "MAIN",
  width: "100%",
  margin: "0px",
};
