import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Input from "../../../atoms/Input";
import Dropdown from "../../../atoms/Dropdown";
import Helper from "../../../atoms/Helper";
import SpaceBetween from "../../../organizers/SpaceBetween";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
`;

export default function ArticleData(props) {
  const [articleData, setArticleDataState] = useState(() => {
    props.articleData.unitMeasure = props.articleData.unitMeasure || "PIECE";
    props.articleData.currency = props.articleData.currency || "MXN";
    return props.articleData;
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const temp = {
      ...articleData,
      [name]: e.target.value,
    };

    //Save locally
    setArticleDataState(temp);

    //Save on parent component
    props.handleChange &&
      props.handleChange({
        type: "updateData",
        key: name,
        value: e.target.value,
      });
    props.setInputErrors &&
      props.setInputErrors((prev) => ({ ...prev, [name]: false }));
  };

  const showSKUAlert = () => {
    const input = (
      <Input
        key="1"
        label="SKU"
        value={articleData.sku}
        handleChange={handleChange}
        name="sku"
      />
    );
    if (props.articleType === "BASIC") {
      return (
        <SpaceBetween>
          {input}
          <Input
            key="2"
            label="Alerta"
            value={articleData.alarm}
            handleChange={handleChange}
            name="alarm"
          />
          <Helper label="Se emite una alerta cuando el stock en inventario es igual o menor a la cantidad especificada" />
        </SpaceBetween>
      );
    }
    return input;
  };

  return (
    <MainContainer {...props}>
      <Input
        label="Nombre del artículo"
        value={articleData.name}
        handleChange={handleChange}
        name="name"
        error={props.inputErrors?.name}
        helperText={props.inputErrors?.name && "Este campo es obligatorio"}
      />
      {showSKUAlert()}
      <SpaceBetween>
        <Dropdown
          key="1"
          label="Unidad de medida"
          name="unitMeasure"
          value={articleData.unitMeasure}
          options={[
            { value: "PIECE", name: "Pieza" },
            { value: "KILOGRAM", name: "Kilo" },
            { value: "LITER", name: "Litro" },
            { value: "METER", name: "Metro" },
          ]}
          handleChange={handleChange}
        />
        <Dropdown
          key="2"
          label="Divisa"
          name="currency"
          value={articleData.currency}
          options={[
            { value: "MXN", name: "Peso Mexicano" },
            { value: "USD", name: "Dólar Americano" },
            { value: "EUR", name: "Euro" },
            { value: "GBP", name: "Libra Esterlina" },
            { value: "JPY", name: "Yen Japonés" },
            { value: "CNY", name: "Yuan Chino" },
          ]}
          handleChange={handleChange}
        />
      </SpaceBetween>
      <SpaceBetween>
        <Input
          key="1"
          label="Precio de compra"
          value={articleData.cost}
          handleChange={handleChange}
          name="cost"
        />
        <Input
          key="2"
          label="Precio de venta"
          value={articleData.price}
          handleChange={handleChange}
          name="price"
        />
      </SpaceBetween>
      <Input
        label="Notas"
        value={articleData.notes}
        handleChange={handleChange}
        name="notes"
      />
    </MainContainer>
  );
}

ArticleData.propTypes = {
  articleData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    unitMeasure: PropTypes.string.isRequired,
    alarm: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func,
  setInputErrors: PropTypes.func,
  inputErrors: PropTypes.shape({
    name: PropTypes.bool,
    unitMeasure: PropTypes.bool,
    currency: PropTypes.bool,
  }),
};
