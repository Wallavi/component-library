import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { colors } from "../../colorPalette";

const getBorder = (props) => {
  if (props.isNewImage) return `2px solid ${props.colors.primaryGreen}`;
  if (props.isRemoved) return `2px solid ${props.colors.primaryRed}`;
  return "";
};

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
    border: ${(props) => getBorder(props)};
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

const DeleteBtn = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.isRemoved ? props.colors.primaryBlue : props.colors.primaryRed};
  width: 20px;
  height: 20px;
  color: ${(props) => props.colors.neutral_0};
  text-align: center;
  line-height: 20px;
  cursor: pointer;
`;

export default function Thumbnail(props) {
  const [isHover, setIsHover] = useState(false);
  return (
    <MainContainer
      isNewImage={props.isNewImage}
      colors={colors}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      isRemoved={props.isRemoved}
    >
      <img src={props.source} alt="Article" />
      {props.isNewImage && <Banner colors={colors}>Nueva</Banner>}
      {isHover && props.handleClick && (
        <DeleteBtn
          onClick={props.handleClick}
          colors={colors}
          isRemoved={props.isRemoved}
        >
          {props.isRemoved ? <span>&#43;</span> : <span>&#9747;</span>}
        </DeleteBtn>
      )}
    </MainContainer>
  );
}

Thumbnail.propTypes = {
  source: PropTypes.string.isRequired,
  isNewImage: PropTypes.bool,
  isRemoved: PropTypes.bool,
};

Thumbnail.defaultProps = {
  isNewImage: false,
};
