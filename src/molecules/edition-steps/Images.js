import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Input from "../../atoms/Input";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
`;

export default function Navbar(props) {
  return (
    <MainContainer {...props}>
      <Input label="Nombre del artículo"></Input>
    </MainContainer>
  );
}

Navbar.propTypes = {};

Navbar.defaultProps = {};
