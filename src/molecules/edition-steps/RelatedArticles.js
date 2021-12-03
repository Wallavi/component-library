import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Label from "../../atoms/labels/CompoundArticle";
import SearchArticle from "../../organisms/Dropdown";
import Row from "../SelectQuantity";

const MainContainer = styled.div``;

const RelatedArticlesSelected = styled.div`
  max-height: 300px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 30px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 10%) 0px 0px 10px 1px;
`;

export default function RelatedArticles(props) {
  const [articlesSelected, setArticlesSelected] = useState(
    props.articlesSelected ? props.articlesSelected : []
  );
  const formattedDataForDropdown = props.articles.map((e) => {
    return {
      mainData: e.name,
      secondaryData: e.sku,
    };
  });

  const removeArticle = (articleToBeRemoved) => {
    const temp = {};
    articlesSelected.forEach((element) => {
      temp[element.id] = element;
    });

    delete temp[articleToBeRemoved.id];
    setArticlesSelected(Object.values(temp));
  };

  const addArticle = (articleToBeAdded) => {
    const temp = {};
    articlesSelected.forEach((element) => {
      temp[element.id] = element;
    });

    temp[articleToBeAdded.id] = articleToBeAdded;
    setArticlesSelected(Object.values(temp));
  };

  return (
    <MainContainer>
      <Label
        articleName={props.articleName}
        unitMeasure={props.unitMeasure}
      ></Label>

      <SearchArticle
        label="Buscar artículo por nombre o SKU"
        listItems={formattedDataForDropdown}
        onSelect={(articleToBeAdded) => addArticle(articleToBeAdded)}
      />

      {articlesSelected.length >= 1 && (
        <RelatedArticlesSelected>
          {articlesSelected.map((e) => (
            <Row
              key={e.id}
              label={e.articleName}
              unitMeasure={e.unitMeasure}
              qty={e.qty}
              id={e.id}
              onClick={(articleToBeRemoved) =>
                removeArticle(articleToBeRemoved)
              }
              onChange={() => {}}
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
};
