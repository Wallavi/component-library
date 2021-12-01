import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Label from "../../atoms/labels/CompoundArticle";
import Row from "../SelectArticleQuantity";

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

export default function ComponentName(props) {
  return (
    <MainContainer>
      <Label
        articleName={props.articleName}
        unitMeasure={props.unitMeasure}
      ></Label>

      {props.articlesSelected.length >= 1 && (
        <RelatedArticlesSelected>
          {props.articlesSelected.map((e) => (
            <Row
              articleName={e.articleName}
              unitMeasure={e.unitMeasure}
              qty={e.qty}
              onClick={""}
            />
          ))}
        </RelatedArticlesSelected>
      )}
    </MainContainer>
  );
}

ComponentName.propTypes = {
  articleName: PropTypes.string.isRequired,
  unitMeasure: PropTypes.string.isRequired,
  articlesSelected: PropTypes.arrayOf(
    PropTypes.shape({
      articleName: PropTypes.string.isRequired,
      unitMeasure: PropTypes.string.isRequired,
      qty: PropTypes.string.isRequired,
    })
  ),
};
