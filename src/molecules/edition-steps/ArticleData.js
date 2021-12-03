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

export default function ArticleData(props) {
  return (
    <MainContainer {...props}>
      <Input label="Nombre del artículo" value={""} onChange={() => {}}></Input>
      <SpaceBetween>
        <Input key="random" label="SKU" value={""} onChange={() => {}}></Input>
        <Input key="key" label="Alarma" value={""} onChange={() => {}}></Input>
      </SpaceBetween>
      <SpaceBetween>
        <Input
          key="for"
          label="Unidad de medida"
          value={""}
          onChange={() => {}}
        ></Input>
        <Input key="thje" label="Divisa" value={""} onChange={() => {}}></Input>
      </SpaceBetween>
      <SpaceBetween>
        <Input
          key="1"
          label="Precio de compra"
          value={""}
          onChange={() => {}}
        ></Input>
        <Input
          key="2"
          label="Precio de venta"
          value={""}
          onChange={() => {}}
        ></Input>
      </SpaceBetween>
      <Input label="Notas" value={""} onChange={() => {}}></Input>
    </MainContainer>
  );
}

ArticleData.propTypes = {};

ArticleData.defaultProps = {};
