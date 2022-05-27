import DataStep from "../molecules/edition-steps/ArticleData";
import ImagesStep from "../molecules/edition-steps/Images";
import RelatedArticlesStep from "../molecules/edition-steps/RelatedArticles";
import LocationsStep from "../molecules/edition-steps/Locations";

export const childsEditArticle = (params) => {
  const {
    sectionSelected,
    data,
    articleType,
    inputErrors,
    setInputErrors,
    setDataState,
    articles,
    locations,
  } = params;
  return {
    Información: (
      <DataStep
        key="1"
        selected={sectionSelected}
        articleData={data.articleData}
        handleChange={setDataState}
        articleType={articleType}
        inputErrors={inputErrors}
        setInputErrors={setInputErrors}
      />
    ),
    Imágenes: (
      <ImagesStep key="2" images={data.images} handleChange={setDataState} />
    ),
    "Artículos relacionados": (
      <RelatedArticlesStep
        key="3"
        articles={articles}
        articlesSelected={data.articlesRelated}
        articleName={data.articleData.name}
        unitMeasure={data.articleData.unitMeasure}
        handleChange={setDataState}
      />
    ),
    Almacenes: (
      <LocationsStep
        key="4"
        locations={locations}
        articleLocations={data.locations}
        handleChange={setDataState}
      />
    ),
  };
};
