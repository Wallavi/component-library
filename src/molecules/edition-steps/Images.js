import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import DropImage from "../../atoms/DropImage";
import Thumbnail from "../../atoms/Thumbnail";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  display: flex;
  overflow: scroll;
`;

export default function Images(props) {
  return (
    <MainContainer {...props}>
      <DropImage
        handleOnDropImage={props.handleOnDropImage}
        images={props.newImages}
      ></DropImage>
      <ThumbnailContainer>
        {props.images.map((element, index) => (
          <Thumbnail key={index} source={element} isNewImage={true}></Thumbnail>
        ))}
      </ThumbnailContainer>
    </MainContainer>
  );
}

Images.propTypes = {
  images: PropTypes.array.isRequired,
  newImages: PropTypes.array.isRequired,
  handleOnDropImage: PropTypes.func,
};

Images.defaultProps = {
  images: [],
  newImages: [],
};
