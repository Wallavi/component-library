import React, { useState } from "react";
import PropTypes from "prop-types";

import Edition from "../organisms/Edition";
import DataStep from "../molecules/edition-steps/ArticleData";
import ImagesStep from "../molecules/edition-steps/Images";
import RelatedArticlesStep from "../molecules/edition-steps/RelatedArticles";
import ArticleData from "../molecules/edition-steps/ArticleData";

export default function EditArticle(props) {
  const [data, setDataState] = useState({
    articleData: props.articleData,
    articleImages: props.articleImages,
    articlesRelated: props.articlesRelated,
    newImages: [],
  });
  const [sectionSelected, setSelectedSection] = useState(0);

  const handleClickStep = (newStep) => {
    setSelectedSection(newStep);
  };

  const handleChange = (section, value) => {
    setDataState({
      ...data,
      [section]: value,
    });
  };

  return (
    <Edition
      title="Editar artículo"
      steps={["Información", "Imágenes", "Artículos relacionados"]}
      children={[
        <DataStep
          key="1"
          selected={sectionSelected}
          articleData={data.articleData}
          handleChange={(value) => handleChange("articleData", value)}
        ></DataStep>,
        <ImagesStep
          key="2"
          images={data.articleImages}
          newImages={data.newImages}
          handleChange={(value) => handleChange("newImages", value)}
        ></ImagesStep>,
        <RelatedArticlesStep
          key="3"
          articles={props.articles}
          articlesSelected={data.articlesRelated}
          articleName={data.articleData.name}
          unitMeasure={data.articleData.unitMeasure}
          handleChange={(value) => handleChange("articlesRelated", value)}
        ></RelatedArticlesStep>,
      ]}
      selected={sectionSelected}
      handleClick={handleClickStep}
    ></Edition>
  );
}

EditArticle.propTypes = {
  articleData: ArticleData.propTypes.articleData,
  articleImages: PropTypes.array,
  articles: RelatedArticlesStep.propTypes.articles,
  articlesRelated: RelatedArticlesStep.propTypes.articlesSelected,
};
