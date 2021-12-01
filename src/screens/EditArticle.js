import React, { useState } from "react";
import PropTypes from "prop-types";

import Edition from "../molecules/Edition";
import DataStep from "../molecules/edition-steps/ArticleData";
import ImagesStep from "../molecules/edition-steps/Images";
import RelatedArticlesStep from "../molecules/edition-steps/RelatedArticles";

export default function EditArticle(props) {
  const [sectionSelected, setSelectedSection] = useState(0);
  const [newImages, setImagesState] = useState([]);
  const allTheImages = newImages.map((e) => e.base64).concat(props.images);

  const handleOnClickStep = (newStep) => {
    setSelectedSection(newStep);
  };

  const handleOnDropImage = (images) => {
    setImagesState(images);
  };

  return (
    <Edition
      title="Editar artículo"
      steps={["Información", "Imágenes", "Artículos relacionados"]}
      children={[
        <DataStep
          handleClick={handleOnClickStep}
          selected={sectionSelected}
        ></DataStep>,
        <ImagesStep
          images={allTheImages}
          newImages={newImages}
          handleOnDropImage={handleOnDropImage}
        ></ImagesStep>,
        <RelatedArticlesStep></RelatedArticlesStep>,
      ]}
      selected={sectionSelected}
      handleClick={handleOnClickStep}
    ></Edition>
  );
}

EditArticle.propTypes = {
  images: PropTypes.array,
};

EditArticle.defaultProps = {
  images: [],
};
