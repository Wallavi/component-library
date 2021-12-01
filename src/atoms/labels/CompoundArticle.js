import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MainContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
  & span {
    color: #5590ff;
    font-weight: 500;
  }
`;

export default function CompoundArticleLabel(props) {
  return (
    <MainContainer>
      Por cada <span>{props.unitMeasure}</span> de{" "}
      <span>{props.articleName}</span> que se registre como entrada, serán
      extraidos los siguientes artículos.
    </MainContainer>
  );
}

CompoundArticleLabel.propTypes = {
  unitMeasure: PropTypes.string.isRequired,
  articleName: PropTypes.string.isRequired,
};
