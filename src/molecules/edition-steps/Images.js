import React, { useState } from "react";
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
  const [newImages, setNewImagesState] = useState([]);

  const handleDropImage = (images) => {
    setNewImagesState(images);
  };

  return (
    <MainContainer {...props}>
      <DropImage
        handleDropImage={handleDropImage}
        images={[...newImages]}
      ></DropImage>
      <ThumbnailContainer>
        {props.images.map((element, index) => (
          <Thumbnail key={index} source={element}></Thumbnail>
        ))}
        {newImages.map((element, index) => {
          return (
            <Thumbnail
              key={index}
              source={element.base64}
              isNewImage={true}
            ></Thumbnail>
          );
        })}
      </ThumbnailContainer>
    </MainContainer>
  );
}

Images.propTypes = {
  images: PropTypes.array.isRequired,
};

Images.defaultProps = {
  images: [],
};
