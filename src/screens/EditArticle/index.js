import React, { useEffect, useReducer, useState } from "react";
import PropTypes from "prop-types";

import ArticleData from "../../molecules/edition-steps/ArticleData";
import Edition from "../../organisms/Edition";
import RelatedArticlesStep from "../../molecules/edition-steps/RelatedArticles";
import LocationsStep from "../../molecules/edition-steps/Locations";
import Images from "../../molecules/edition-steps/Images";
import { childsEditArticle } from "../../_helpers/childsEditArticle";
import EditArticleReducer from "./EditArticleReducer";
export default function EditArticle(props) {
  const [steps, setSteps] = useState([]);
  const [children, setChildren] = useState([]);
  const [data, setDataState] = useReducer(EditArticleReducer, {
    articleData: {
      name: "",
      unitMeasure: "",
      alarm: "",
      sku: "",
      price: "",
      priceToSell: "",
      notes: "",
      currency: "",
      ...props.articleData,
    },
    articlesRelated: {
      newArticlesRelated: [],
      oldArticlesRelated: [],
      removedArticlesRelated: [],
      ...props.articlesRelated,
    },
    images: {
      newImages: [],
      oldImages: [],
      removedImages: [],
      ...props.images,
    },
    locations: {
      newLocations: [],
      oldLocations: [],
      removedLocations: [],
      ...props.articleLocations,
    },
  });
  const [sectionSelected, setSelectedSection] = useState(0);
  const [inputErrors, setInputErrors] = useState({
    name: false,
    unitMeasure: false,
    currency: false,
  });

  useEffect(() => {
    const params = {
      sectionSelected,
      data,
      inputErrors,
      setInputErrors,
      setDataState,
      articles: props.articles,
      locations: props.locations,
      articleType: props.articleType,
    };
    const childs = childsEditArticle(params);
    let stepsNames;
    let childrenComponents;
    switch (props.articleType) {
      case "composite":
        stepsNames = [
          "Información",
          "Imágenes",
          "Artículos relacionados",
          "Almacenes",
        ];
        childrenComponents = stepsNames.map((s) => childs[s]);
        setChildren(childrenComponents);
        setSteps(stepsNames);
        // setChildren(children)
        break;
      case "combo":
        stepsNames = ["Información", "Imágenes", "Combo"];
        childrenComponents = stepsNames.map((s) => childs[s]);
        setChildren(childrenComponents);
        setSteps(stepsNames);
        break;
      default:
        stepsNames = ["Información", "Imágenes"];
        childrenComponents = stepsNames.map((s) => childs[s]);
        setChildren(childrenComponents);
        setSteps(stepsNames);
        break;
    }
  }, [
    data,
    inputErrors,
    props.articleType,
    props.articles,
    props.locations,
    sectionSelected,
  ]);

  const handleClickStep = (newStep) => {
    if (sectionSelected === 0) {
      const errors = {};
      const { name, unitMeasure, currency } = data.articleData;
      if (name === "") errors.name = true;
      if (unitMeasure === "") errors.unitMeasure = true;
      if (currency === "") errors.currency = true;
      setInputErrors((prev) => ({ ...prev, ...errors }));
      if (Object.keys(errors).length) return;
    }
    if (newStep < steps.length) setSelectedSection(newStep);
    else props.saveCallback && props.saveCallback(data);
  };

  return (
    <Edition
      title={props.newArticle ? "Nuevo artículo" : "Editar artículo"}
      steps={steps}
      children={children}
      selected={sectionSelected}
      handleClick={handleClickStep}
    />
  );
}

EditArticle.propTypes = {
  newArticle: PropTypes.bool.isRequired,
  articleData: ArticleData.propTypes.articleData,
  images: Images.propTypes.images,
  articles: RelatedArticlesStep.propTypes.articles,
  articlesRelated: RelatedArticlesStep.propTypes.articlesSelected,
  locations: LocationsStep.propTypes.locations,
  articleType: PropTypes.oneOf(["normal", "composite", "combo"]),
  saveCallback: PropTypes.func.isRequired,
};

EditArticle.defaultProps = {
  newArticle: true,
  articleType: "normal",
};
