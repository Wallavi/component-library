import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Label from "../../../atoms/labels/CompoundArticle";
import SearchArticle from "../../../organisms/SearchArticle";
import Row from "../../SelectQuantity";

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
  const formatArticlesSel = (selected) => {
    return Object.keys(selected).reduce(
      (prev, key) => [
        ...prev,
        ...selected[key].map((e) => ({ ...e, origin: key })),
      ],
      []
    );
  };

  const formatData = (article) =>
    article.map((e) => ({
      ...e,
      source: e.images[0],
      mainData: e.name,
      secondaryData: e.sku,
      qty: e.qty ? e.qty : "0",
    }));

  const [articlesSelected, setArticlesSelected] = useState([]);

  useEffect(() => {
    props.articlesSelected &&
      setArticlesSelected(
        formatData(formatArticlesSel(props.articlesSelected))
      );
  }, [props]);

  const formattedArticles = formatData(props.articles);

  const modifyRelatedArticles = (operation, article, index) => {
    if (operation === "ADD") {
      const ids = articlesSelected.map((e) => e.id);
      if (!ids.includes(article.id)) {
        //Save on parent component
        props.handleChange &&
          props.handleChange({
            type: "addRelatedArticles",
            value: article,
          });
      }
    } else {
      props.handleChange &&
        props.handleChange({
          type: "deleteRelatedArticles",
          origin: article.origin,
          index,
        });
    }
  };

  const handleChange = (value, article, index) => {
    if (!value.match(/\D+/))
      props.handleChange &&
        props.handleChange({
          type: "updateRelatedArticles",
          origin: article.origin,
          value,
          index,
        });
  };

  return (
    <MainContainer>
      <Label articleName={props.articleName} unitMeasure={props.unitMeasure} />

      <SearchArticle
        label="Buscar artículo por nombre o SKU"
        listItems={formattedArticles}
        onSelect={(article) => modifyRelatedArticles("ADD", article)}
      />

      {articlesSelected.length >= 1 && (
        <RelatedArticlesSelected>
          {articlesSelected.map((e, i) => (
            <Row
              key={e.id}
              label={e.mainData}
              unitMeasure={e.unitMeasure}
              qty={e.qty}
              id={e.id}
              onClick={() => modifyRelatedArticles("REMOVE", e, i)}
              handleChange={(evt) => handleChange(evt.target.value, e, i)}
              error={e.error}
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
  articlesSelected: PropTypes.shape({
    newArticlesRelated: PropTypes.arrayOf(
      PropTypes.shape({
        articleId: PropTypes.number.isRequired,
        qty: PropTypes.number.isRequired,
      })
    ),
    oldArticlesRelated: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        unitMeasure: PropTypes.string.isRequired,
        qty: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
      })
    ),
    removedArticlesRelated: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      })
    ),
  }).isRequired,
  handleChange: PropTypes.func,
};
