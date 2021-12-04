import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../colorPalette";

const MainContainer = styled.figure`
  position: relative;
  width: 100px;
  height: 100px;
  > img {
    width: 100%;
    height: 100%;
    background-color: black;
    object-fit: scale-down;
    border-radius: 8px;
    box-sizing: border-box;
    border: ${(props) =>
      props.isNewImage && `2px solid ${props.colors.primaryGreen}`};
  }
  margin: 0 5px;
  flex-shrink: 0;
`;

const Banner = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 8px 0;
  background-color: ${(props) => props.colors.primaryGreen};
  color: white;
  font-weight: 400;
  padding: 5px 8px;
`;

export default function Thumbnail(props) {
  return (
    <MainContainer isNewImage={props.isNewImage} colors={colors}>
      <img src={props.source} alt="Article" />
      {props.isNewImage && <Banner colors={colors}>Nueva</Banner>}
    </MainContainer>
  );
}

Thumbnail.propTypes = {
  source: PropTypes.string.isRequired,
  isNewImage: PropTypes.bool,
};

Thumbnail.defaultProps = {
  isNewImage: false,
};
