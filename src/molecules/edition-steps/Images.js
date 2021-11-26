import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Input from "../../atoms/Input";
import Button from "../../atoms/Button";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
`;

const SpaceBetween = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function Navbar(props) {
  return (
    <MainContainer {...props}>
      <Input label="Nombre del artículo"></Input>
      <SpaceBetween>
        <Input label="SKU"></Input>
        <Input label="Alarma"></Input>
      </SpaceBetween>
      <Button label="Continuar"></Button>
    </MainContainer>
  );
}

Navbar.propTypes = {};

Navbar.defaultProps = {};
