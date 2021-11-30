import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const MainContainer = styled.figure`
  position: relative;
  width: 100px;
  height: 100px;
  > img {
    width: 100%;
    height: 100%;
    background-color: #000;
    object-fit: scale-down;
    border-radius: 8px;
    box-sizing: border-box;
    border: ${(props) => props.isNewImage && "2px solid #2bde73"};
  }
  margin: 0 5px;
  flex-shrink: 0;
`;

const Banner = styled.p`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 12px 0;
  background-color: #2bde73;
  color: #fff;
  font-weight: 400;
  padding: 5px 8px;
`;

export default function Thumbnail(props) {
  return (
    <MainContainer isNewImage={props.isNewImage}>
      <img src={props.source} alt="Article" />
      {props.isNewImage && <Banner>Nueva</Banner>}
    </MainContainer>
  );
}

Thumbnail.propTypes = {
  source: PropTypes.string,
  isNewImage: PropTypes.bool,
};

Thumbnail.defaultProps = {
  isNewImage: false,
};
