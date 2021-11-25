import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Input from "../atoms/Input";

const MainContainer = styled.div`
  position: fixed;
  width: 400px;
  border-radius: 10px;
  left: 50%;
  top: 50%;
  background: white;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  padding: 35px;
`;

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.p`
  font-size: 17px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20 px;
`;

export default function Navbar(props) {
  const [sectionSelected, setSelectedSection] = useState(0);
  const handleOnClickStep = (e) => {
    setSelectedSection(e);
  };

  return (
    <MainContainer {...props}>
      <Title>{props.title}</Title>
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

Navbar.propTypes = {};

Navbar.defaultProps = {};
