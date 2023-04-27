import Steps from "../../atoms/Step";
import Images from "../../molecules/edition-steps/Images";
import Button from "../../atoms/Button";
import ArticleData from "../../molecules/edition-steps/ArticleData";

import { useState } from "react";
import { MainContainer, Title } from "../Edition/styles";

const BasicCreation = (props) => {
  const stepsTitles = ["Información", "Imágenes"];
  const [stage, setStage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState({
    articleData: {
      name: "",
      unitMeasure: "",
      currency: "PIECE",
      alarm: 0,
      sku: "",
    },
    images: { newImages: [], ...props.images },
    ...props.article,
  });

  const creationStages = {
    0: <ArticleData article={article} handleChange={setArticle} />,
    1: <Images />,
  };

  const handleNextStep = () => {
    if (stage === 0) setStage(1);
    else alert("Execute external insert");
  };

  return (
    <MainContainer>
      <Title>Nuevo Artículo</Title>
      <Steps steps={stepsTitles} handleClick={setStage} selected={stage} />
      {creationStages[stage]}
      <Button
        loading={loading}
        margin="15px 0 0 0"
        label={stage === 0 ? "Continuar" : "Guardar"}
        size="BIG"
        onClick={() => handleNextStep()}
      />
    </MainContainer>
  );
};

export default BasicCreation;
