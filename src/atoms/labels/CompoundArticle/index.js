import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../../../colorPalette";

const MainContainer = styled.div`
  text-align: center;
  margin-bottom: 40px;
  & span {
    color: ${(props) => props.colors.primaryBlue};
    font-weight: 500;
  }
`;

export default function CompoundArticleLabel(props) {
  let unitMeasure;

  switch (props.unitMeasure) {
    case "PIECE":
      unitMeasure = "Pieza";
      break;
    case "KILOGRAM":
      unitMeasure = "Kilo";
      break;
    case "LITER":
      unitMeasure = "Litro";
      break;
    case "METER":
      unitMeasure = "Metro";
      break;
    default:
      break;
  }

  return (
    <MainContainer colors={colors}>
      Por cada <span>{unitMeasure}</span> de <span>{props.articleName}</span>{" "}
      que se registre como entrada, serán extraidos los siguientes artículos.
    </MainContainer>
  );
}

CompoundArticleLabel.propTypes = {
  unitMeasure: PropTypes.string.isRequired,
  articleName: PropTypes.string.isRequired,
};
