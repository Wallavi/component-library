import React, { useState } from "react";
import PropTypes from "prop-types";

import Edition from "../organisms/Edition";
import DataStep from "../molecules/edition-steps/ArticleData";
import ImagesStep from "../molecules/edition-steps/Images";
import RelatedArticlesStep from "../molecules/edition-steps/RelatedArticles";
import ArticleData from "../molecules/edition-steps/ArticleData";

export default function EditArticle(props) {
  const [sectionSelected, setSelectedSection] = useState(0);

  const handleClickStep = (newStep) => {
    setSelectedSection(newStep);
  };

  return (
    <Edition
      title="Editar artículo"
      steps={["Información", "Imágenes", "Artículos relacionados"]}
      children={[
        <DataStep
          key="1"
          selected={sectionSelected}
          articleData={props.articleData}
        ></DataStep>,
        <ImagesStep key="2" images={props.images}></ImagesStep>,
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
  articleData: ArticleData.propTypes.articleData,
};

EditArticle.defaultProps = {
  images: [],
};
