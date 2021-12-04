import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../../colorPalette";

const MainContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
  & span {
    color: ${(props) => props.colors.primaryBlue};
    font-weight: 500;
  }
  color: ${(props) => props.colors.primaryDarkBlue};
`;

export default function CompoundArticleLabel(props) {
  return (
    <MainContainer colors={colors}>
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
