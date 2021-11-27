import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Input from "../../atoms/Input";
import SpaceBetween from "../../organizers/SpaceBetween";

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
      <SpaceBetween>
        <Input label="SKU"></Input>
        <Input label="Alarma"></Input>
      </SpaceBetween>
      <SpaceBetween>
        <Input label="Unidad de medida"></Input>
        <Input label="Divisa"></Input>
      </SpaceBetween>
      <SpaceBetween>
        <Input label="Precio de compra"></Input>
        <Input label="Precio de venta"></Input>
      </SpaceBetween>
      <Input label="Notas"></Input>
    </MainContainer>
  );
}

Navbar.propTypes = {
  onClick: PropTypes.func,
};

Navbar.defaultProps = {};
