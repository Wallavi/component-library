import React, { useState } from "react";
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
  const [articleData, setArticleDataState] = useState(props.articleData);

  const handleChange = (e) => {
    const name = e.target.name;
    const temp = {
      ...articleData,
      [name]: e.target.value,
    };

    //Save locally
    setArticleDataState(temp);

    //Save on parent component
    if (props.handleChange) {
      props.handleChange(temp);
    }
  };

  return (
    <MainContainer {...props}>
      <Input
        label="Nombre del artículo"
        value={articleData.name}
        handleChange={handleChange}
        name="name"
      ></Input>
      <SpaceBetween>
        <Input
          key="1"
          label="SKU"
          value={articleData.sku}
          handleChange={handleChange}
          name="sku"
        ></Input>
        <Input
          key="2"
          label="Alarma"
          value={articleData.alarm}
          handleChange={handleChange}
          name="alarm"
        ></Input>
      </SpaceBetween>
      <SpaceBetween>
        <Input
          key="1"
          label="Unidad de medida"
          value={articleData.unitMeasure}
          handleChange={handleChange}
          name="unitMeasure"
        ></Input>
        <Input
          key="2"
          label="Divisa"
          value={articleData.currency}
          handleChange={handleChange}
          name="currency"
        ></Input>
      </SpaceBetween>
      <SpaceBetween>
        <Input
          key="1"
          label="Precio de compra"
          value={articleData.price}
          handleChange={handleChange}
          name="price"
        ></Input>
        <Input
          key="2"
          label="Precio de venta"
          value={articleData.priceToSell}
          handleChange={handleChange}
          name="priceToSell"
        ></Input>
      </SpaceBetween>
      <Input
        label="Notas"
        value={articleData.notes}
        handleChange={handleChange}
        name="notes"
      ></Input>
    </MainContainer>
  );
}

ArticleData.propTypes = {
  articleData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    unitMeasure: PropTypes.string.isRequired,
    alarm: PropTypes.string.isRequired,
    sku: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    priceToSell: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
  handleChange: PropTypes.func,
};

ArticleData.defaultProps = {};
