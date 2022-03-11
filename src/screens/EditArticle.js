import React, { useState } from "react";
import PropTypes from "prop-types";

import ArticleData from "../molecules/edition-steps/ArticleData";
import Edition from "../organisms/Edition";
import DataStep from "../molecules/edition-steps/ArticleData";
import ImagesStep from "../molecules/edition-steps/Images";
import RelatedArticlesStep from "../molecules/edition-steps/RelatedArticles";
import LocationsStep from "../molecules/edition-steps/Locations";

export default function EditArticle(props) {
  const [data, setDataState] = useState({
    articleData: props.articleData,
    articleImages: props.articleImages,
    articlesRelated: props.articlesRelated,
    newImages: [],
    locations: props.locations,
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
      title={props.newArticle ? "Nuevo artículo" : "Editar artículo"}
      steps={["Información", "Imágenes", "Artículos relacionados", "Almacenes"]}
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
        <LocationsStep
          key="4"
          locations={data.locations}
          handleChange={(value) => {
            handleChange("locations", value);
          }}
        ></LocationsStep>,
      ]}
      selected={sectionSelected}
      handleClick={handleClickStep}
    ></Edition>
  );
}

EditArticle.propTypes = {
  newArticle: PropTypes.bool.isRequired,
  articleData: ArticleData.propTypes.articleData,
  articleImages: PropTypes.array,
  articles: RelatedArticlesStep.propTypes.articles,
  articlesRelated: RelatedArticlesStep.propTypes.articlesSelected,
  locations: LocationsStep.propTypes.locations,
};

EditArticle.defaultProps = {
  newArticle: true,
};
