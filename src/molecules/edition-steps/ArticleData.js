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
      <Input label="Nombre del artículo"></Input>
      <SpaceBetween>
        <Input key="1" label="SKU"></Input>
        <Input key="2" label="Alarma"></Input>
      </SpaceBetween>
      <SpaceBetween>
        <Input key="1" label="Unidad de medida"></Input>
        <Input key="2" label="Divisa"></Input>
      </SpaceBetween>
      <SpaceBetween>
        <Input key="1" label="Precio de compra"></Input>
        <Input key="2" label="Precio de venta"></Input>
      </SpaceBetween>
      <Input label="Notas"></Input>
    </MainContainer>
  );
}

ArticleData.propTypes = {
  onClick: PropTypes.func,
};

ArticleData.defaultProps = {};
