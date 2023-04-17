import Images from "../../molecules/edition-steps/Images";
import Edition from "../../organisms/Edition";
import PropTypes from "prop-types";
import ArticleData from "../../molecules/edition-steps/ArticleData";
import LocationsStep from "../../molecules/edition-steps/Locations";
import EditArticleReducer from "./EditArticleReducer";
import RelatedArticlesStep from "../../molecules/edition-steps/RelatedArticles";

import { useActive } from "../../hooks/useActive";
import { childsEditArticle } from "../../_helpers/childsEditArticle";
import React, { useEffect, useReducer, useState } from "react";

const EditArticle = (props) => {
  const loading = useActive();
  const [steps, setSteps] = useState([]);
  const [children, setChildren] = useState([]);
  const [data, setDataState] = useReducer(EditArticleReducer, {
    articleData: {
      name: "",
      unitMeasure: "",
      alarm: "",
      sku: "",
      cost: "",
      price: "",
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
      case "COMPOUND":
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
      case "COMBO":
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

  const handleClickStep = async (newStep) => {
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
    else {
      loading.on();
      props.saveCallback &&
        (await props.saveCallback({
          ...data,
          articleType: props.articleType ?? "BASIC",
        }));
      loading.off();
    }
  };

  return (
    <Edition
      loading={loading.value}
      title={props.newArticle ? "Nuevo artículo" : "Editar artículo"}
      steps={steps}
      children={children}
      selected={sectionSelected}
      handleClick={handleClickStep}
    />
  );
};

EditArticle.propTypes = {
  newArticle: PropTypes.bool.isRequired,
  articleData: ArticleData.propTypes.articleData,
  images: Images.propTypes.images,
  articles: RelatedArticlesStep.propTypes.articles,
  articlesRelated: RelatedArticlesStep.propTypes.articlesSelected,
  locations: LocationsStep.propTypes.locations,
  articleType: PropTypes.oneOf(["BASIC", "COMPOUND", "COMBO"]),
  saveCallback: PropTypes.func.isRequired,
};

EditArticle.defaultProps = {
  newArticle: true,
  articleType: "BASIC",
};

export default EditArticle;
