import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import DropImage from "../../../atoms/DropImage";
import Thumbnail from "../../../atoms/Thumbnail";

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
  const [images, setImages] = useState([]);

  const formatImages = (imgs) => {
    const temp = { ...imgs };
    delete temp.removedImages;
    return Object.keys(temp).reduce(
      (prev, key) => [
        ...prev,
        ...imgs[key].map((e) => ({ ...e, origin: key })),
      ],
      []
    );
  };

  useEffect(() => {
    props.images && setImages(formatImages(props.images));
  }, [props]);

  const handleDropImage = (images) => {
    //Save on parent component
    props.handleChange &&
      props.handleChange({ type: "addNewImage", value: images });
  };

  const handleRemoveImg = (image) => {
    props.handleChange &&
      props.handleChange({ type: "removeImage", value: image });
  };

  return (
    <MainContainer {...props}>
      <DropImage handleDropImage={handleDropImage} images={[...images]} />
      <ThumbnailContainer>
        {images.map((element, index) => {
          const isNewImage = element.origin === "newImages";
          const isRemoved = props.images?.removedImages?.includes(element.id);
          return (
            <Thumbnail
              key={index}
              source={isNewImage ? element.base64 : element.path}
              isNewImage={isNewImage}
              handleClick={() => handleRemoveImg(element)}
              isRemoved={isRemoved}
            />
          );
        })}
      </ThumbnailContainer>
    </MainContainer>
  );
}

Images.propTypes = {
  images: PropTypes.shape({
    newImages: PropTypes.arrayOf(
      PropTypes.shape({
        base64: PropTypes.string,
        contentType: PropTypes.string,
        name: PropTypes.string,
      })
    ),
    oldImages: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        path: PropTypes.string,
      })
    ).isRequired,
    removedImages: PropTypes.array,
  }).isRequired,
  handleChange: PropTypes.func,
};

Images.defaultProps = {
  images: { newImages: [], oldImages: [], removedImages: [] },
};
