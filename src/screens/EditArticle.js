import React, { useState } from "react";
import PropTypes from "prop-types";

import Edition from "../organisms/Edition";
import DataStep from "../molecules/edition-steps/ArticleData";
import ImagesStep from "../molecules/edition-steps/Images";
import RelatedArticlesStep from "../molecules/edition-steps/RelatedArticles";

export default function EditArticle(props) {
  const [sectionSelected, setSelectedSection] = useState(0);
  const [newImages, setImagesState] = useState([]);
  const allTheImages = newImages.map((e) => e.base64).concat(props.images);

  const handleClickStep = (newStep) => {
    setSelectedSection(newStep);
  };

  const handleDropImage = (images) => {
    setImagesState(images);
  };

  return (
    <Edition
      title="Editar artículo"
      steps={["Información", "Imágenes", "Artículos relacionados"]}
      children={[
        <DataStep key="1" selected={sectionSelected}></DataStep>,
        <ImagesStep
          key="2"
          images={allTheImages}
          newImages={newImages}
          handleDropImage={handleDropImage}
        ></ImagesStep>,
        <RelatedArticlesStep
          key="3"
          articles={[]}
          articlesSelected={[]}
          articleName="Nombre"
          unitMeasure="Pieza"
        ></RelatedArticlesStep>,
      ]}
      selected={sectionSelected}
      handleClick={handleClickStep}
    ></Edition>
  );
}

EditArticle.propTypes = {
  images: PropTypes.array,
};

EditArticle.defaultProps = {
  images: [],
};
