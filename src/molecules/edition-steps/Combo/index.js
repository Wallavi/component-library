import React, { useEffect, useReducer, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import Dropdown from "../../../atoms/Dropdown";
import Input from "../../../atoms/Input";
import Helper from "../../../atoms/Helper";
import Button from "../../../atoms/Button";
import SpaceBetween from "../../../organizers/SpaceBetween";
import ListTable from "../../../organisms/ListTable";
import SearchArticle from "../../../organisms/SearchArticle";

import { colors } from "../../../colorPalette";
import { functions } from "./reducerActions";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;

  .row {
    width: 100%;
    display: flex;
  }
  .right {
    width: 100%;
    text-align: right;
    padding: 5px 10px;
  }
  .label-info {
    font-family: "Roboto";
    font-weight: 500;
  }
`;

const reducerSelections = (state, action) => {
  let tempState = state.slice();
  const isOld = tempState[action.index]?.id;

  if (functions[action.type]) {
    const { state, params } = functions[action.type](tempState, action);
    if (action.handleChange && params)
      action.handleChange({
        ...params,
        type: `${action.type}Combo`,
        id: isOld,
      });
    return state;
  }

  switch (action.type) {
    case "init":
      return action.value;
    case "setName":
    case "setQty":
      const key = action.type.replace("set", "").toLowerCase();
      tempState[action.index][key] = action[key];
      return tempState;
    case "addArticles":
      const related = tempState[action.index].articles;
      if (related.findIndex((f) => f.id === action.article.id) === -1) {
        const article = { ...action.article, src: action.article.source };
        tempState[action.index].articles.push(article);
      }
      return tempState;
    case "Articles":
      const { index, id } = action;
      tempState[index].articles = tempState[index].articles.filter(
        (f) => f.id !== id
      );
      return tempState;
    case "addSelection":
      tempState.push({
        value: uuidv4(),
        name: "Nueva selección",
        articles: [],
        qty: 1,
      });
      return tempState;
    case "removeSelection":
      tempState.splice(action.index, 1);
      return tempState;
    default:
      return tempState;
  }
};

export default function Combo(props) {
  const formatData = (article) =>
    article.map((e, i) => ({
      source: e.images[0],
      mainData: e.name,
      secondaryData: e.sku,
      qty: e.qty ? e.qty : "0",
      id: i,
      ...e,
    }));

  const formattedArticles = formatData(props.articles);

  const [selections, setSelections] = useReducer(reducerSelections, [
    { value: uuidv4(), name: "Selección 1", articles: [] },
    { value: uuidv4(), name: "Selección 2", articles: [] },
  ]);
  const [currentSelection, setCurrentSelection] = useState(0);
  const [errorQty, setErrorQty] = useState({ error: false });

  useEffect(() => {
    if (props.articlesRelated?.oldArticlesRelated.length) {
      const temp = [];
      props.articlesRelated?.oldArticlesRelated.forEach((section) => {
        const articles = formattedArticles
          ?.filter((f) => section?.articles?.includes(f.id))
          .map((e) => ({ ...e, src: e.source }));
        temp.push({
          id: section.id,
          value: uuidv4(),
          name: section.name,
          articles,
        });
      });
      setSelections({
        type: "init",
        value: temp,
        handleChange: props.handleChange,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainContainer {...props}>
      <Dropdown
        key="1"
        label="Selección"
        name={selections[currentSelection].name}
        value={selections[currentSelection].value}
        options={selections}
        handleChange={(evt) => {
          const index = selections.findIndex(
            (f) => f.value === evt.target.value
          );
          setCurrentSelection(index);
        }}
      />
      <Input
        name="selectionName"
        label="Nombre"
        value={selections[currentSelection].name}
        handleChange={(e) =>
          setSelections({
            index: currentSelection,
            type: "setName",
            name: e.target.value,
            handleChange: props.handleChange,
          })
        }
      />

      <div className="row">
        <Input
          name="qty"
          label="Cantidad"
          value={selections[currentSelection].qty ?? 1}
          handleChange={(e) => {
            const value = e.target.value;
            if (!isNaN(value)) {
              if (+value === 0) {
                setErrorQty({
                  error: true,
                  helperText: "La cantidad no puede ser 0",
                });
              } else setErrorQty({ error: false });
              setSelections({
                index: currentSelection,
                type: "setQty",
                qty: value,
                handleChange: props.handleChange,
              });
            }
          }}
          {...errorQty}
        />
        <Helper label="Esta es la cantidad que se restará del producto" />
      </div>
      <SearchArticle
        width="100%"
        label="Buscar artículo por nombre o SKU"
        listItems={formattedArticles}
        onSelect={(article) =>
          setSelections({
            type: "addArticles",
            index: currentSelection,
            article,
            handleChange: props.handleChange,
          })
        }
      />
      <label className="right label-info">
        {selections[currentSelection].articles.length} opciones disponibles
      </label>
      {selections[currentSelection].articles.length > 0 && (
        <ListTable
          listItems={selections[currentSelection].articles}
          handleClick={(e) =>
            setSelections({
              type: "removeArticles",
              id: e.id,
              index: currentSelection,
              handleChange: props.handleChange,
            })
          }
        />
      )}
      <SpaceBetween>
        <Button
          label="Añadir selección"
          size="SMALL"
          onClick={() => {
            setSelections({
              type: "addSelection",
              handleChange: props.handleChange,
            });
            setCurrentSelection(selections.length);
          }}
        />
        {selections.length > 2 && (
          <Button
            label="Eliminar selección"
            size="SMALL"
            bgColor={colors.primaryRed}
            onClick={() => {
              setSelections({
                type: "removeSelection",
                index: currentSelection,
                handleChange: props.handleChange,
                item: selections[currentSelection],
              });
              setCurrentSelection(0);
            }}
          />
        )}
      </SpaceBetween>
    </MainContainer>
  );
}

Combo.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  articlesSelected: PropTypes.shape({
    newArticlesRelated: PropTypes.arrayOf(
      PropTypes.shape({
        qty: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        articles: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
          })
        ),
      })
    ),
    oldArticlesRelated: PropTypes.arrayOf(
      PropTypes.shape({
        qty: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        articles: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
          })
        ),
      })
    ),
    removedArticlesRelated: PropTypes.arrayOf(PropTypes.number),
    modifiedArticlesRelated: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        qty: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        newArticles: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
          })
        ),
        removedArticles: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.number.isRequired,
          })
        ),
      })
    ).isRequired,
  }),
  handleChange: PropTypes.func.isRequired,
};
