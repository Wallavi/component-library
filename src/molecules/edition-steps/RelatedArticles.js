import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Label from "../../atoms/labels/CompoundArticle";
import SearchArticle from "../../organisms/Dropdown";
import Row from "../SelectQuantity";

const MainContainer = styled.div``;

const RelatedArticlesSelected = styled.div`
  max-height: 250px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 30px;
`;

export default function RelatedArticles(props) {
  const formatData = (article) => {
    return article.map((e) => {
      return {
        ...e,
        source: e.images[0],
        mainData: e.name,
        secondaryData: e.sku,
        qty: e.qty ? e.qty : "0",
      };
    });
  };

  const [articlesSelected, setArticlesSelected] = useState(
    props.articlesSelected ? formatData(props.articlesSelected) : []
  );

  const formattedArticles = formatData(props.articles);

  const modifyRelatedArticles = (operation, article) => {
    const temp = {};
    articlesSelected.forEach((element) => {
      temp[element.id] = element;
    });

    if (operation === "ADD") {
      temp[article.id] = article;
    } else {
      delete temp[article.id];
    }

    //Save locally
    setArticlesSelected(Object.values(temp));

    //Save on parent component
    if (props.handleChange) {
      props.handleChange(Object.values(temp));
    }
  };

  return (
    <MainContainer>
      <Label
        articleName={props.articleName}
        unitMeasure={props.unitMeasure}
      ></Label>

      <SearchArticle
        label="Buscar artículo por nombre o SKU"
        listItems={formattedArticles}
        onSelect={(article) => modifyRelatedArticles("ADD", article)}
      />

      {articlesSelected.length >= 1 && (
        <RelatedArticlesSelected>
          {articlesSelected.map((e) => (
            <Row
              key={e.id}
              label={e.mainData}
              unitMeasure={e.unitMeasure}
              qty={e.qty}
              id={e.id}
              onClick={(article) => modifyRelatedArticles("REMOVE", article)}
              handleChange={() => {}}
            />
          ))}
        </RelatedArticlesSelected>
      )}
    </MainContainer>
  );
}

RelatedArticles.propTypes = {
  articleName: PropTypes.string.isRequired,
  unitMeasure: PropTypes.string.isRequired,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      unitMeasure: PropTypes.string.isRequired,
      sku: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      images: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
  articlesSelected: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      unitMeasure: PropTypes.string.isRequired,
      qty: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  handleChange: PropTypes.func,
};
