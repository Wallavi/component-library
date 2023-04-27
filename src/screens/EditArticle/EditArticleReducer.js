const indexToCombo = (state, key, searchKey, value) => {
  if (!state.articlesRelated[key]) state.articlesRelated[key] = [];
  const index = state.articlesRelated[key].findIndex(
    (f) => f[searchKey] === value
  );
  return { newState: state, index };
};

export default function EditArticle(state, action) {
  let tempState = { ...state };
  switch (action.type) {
    case "init":
      return action.value;
    case "updateData":
      tempState.articleData[action.key] = action.value;
      return tempState;

    case "addNewImage":
      if (!tempState.images.newImages) tempState.images.newImages = [];
      const newImgs = action.value.filter((f) => !f.origin);
      tempState.images.newImages.push(...newImgs);
      return tempState;
    case "removeImage":
      const { origin, id, name } = action.value;
      if (origin === "oldImages") {
        if (!tempState.images.removedImages) {
          tempState.images.removedImages = [];
        }
        if (tempState.images.removedImages.includes(id)) {
          tempState.images.removedImages =
            tempState.images.removedImages.filter((f) => f !== id);
        } else tempState.images.removedImages.push(id);
      } else if (origin === "newImages") {
        tempState.images.newImages = tempState.images.newImages.filter(
          (f) => f.name !== name
        );
      }
      return tempState;
    case "addRelatedArticles":
      if (!tempState.articlesRelated.newArticlesRelated)
        tempState.articlesRelated = { newArticlesRelated: [] };
      if (action.value.id)
        tempState.articlesRelated.newArticlesRelated.push({
          ...action.value,
          origin: "newArticlesRelated",
        });
      return tempState;
    case "updateRelatedArticles":
      const value = action.value.replace(/0/, "");
      tempState.articlesRelated[action.origin][action.index].qty = value;
      return tempState;
    case "deleteRelatedArticles":
      tempState.articlesRelated[action.origin].splice(action.index, 1);
      return tempState;
    case "changeLocations":
      if (action.checked) {
        if (tempState.locations.removedLocations.includes(action.value)) {
          tempState.locations.removedLocations =
            tempState.locations.removedLocations.filter(
              (f) => f !== action.value
            );
        }
        const currentIds = tempState.locations.oldLocations.map((e) => e.id);
        if (!currentIds.includes(action.value)) {
          tempState.locations.newLocations.push(action.value);
        }
      } else {
        const currentIds = tempState.locations.oldLocations.map((e) => e.id);
        if (tempState.locations.newLocations.includes(action.value)) {
          tempState.locations.newLocations =
            tempState.locations.newLocations.filter((f) => f !== action.value);
        } else if (currentIds.includes(action.value)) {
          tempState.locations.removedLocations.push(action.value);
        } else if (
          tempState.locations.removedLocations.includes(action.value)
        ) {
          tempState.locations.removedLocations =
            tempState.locations.removedLocations.filter(
              (f) => f !== action.value
            );
        }
      }
      return tempState;
    case "setNameCombo":
    case "setQtyCombo": {
      const { id, value, type } = action;
      const key = id ? "modifiedArticlesRelated" : "newArticlesRelated";
      const searchKey = id ? "id" : "value";
      const { newState, index } = indexToCombo(
        tempState,
        key,
        searchKey,
        id ?? value.value
      );
      if (id) {
        const keyUpdate = type === "setNameCombo" ? "description" : "qty";
        const workBook = value;
        if (index === -1)
          newState.articlesRelated[key].push({
            id: workBook.id,
            [keyUpdate]: workBook[keyUpdate],
          });
        else
          newState.articlesRelated[key][index][keyUpdate] = workBook[keyUpdate];
      } else {
        if (index === -1) newState.articlesRelated[key].push(value);
        else newState.articlesRelated[key][index] = value;
      }
      return newState;
    }
    case "addSelectionCombo": {
      if (!tempState.articlesRelated.newArticlesRelated)
        tempState.articlesRelated.newArticlesRelated = [];
      tempState.articlesRelated.newArticlesRelated.push(action.newSelection);
      return tempState;
    }
    case "addArticlesCombo": {
      const key = action.id ? "modifiedArticlesRelated" : "newArticlesRelated";
      const searchKey = action.id ? "id" : "uuid";
      const { newState, index } = indexToCombo(
        tempState,
        key,
        searchKey,
        action.id ?? action.item.uuid
      );
      if (action.id) {
        if (index === -1) {
          newState.articlesRelated[key].push({
            id: action.id,
            newArticles: [action.article],
          });
        } else {
          if (!newState.articlesRelated[key][index].newArticles)
            newState.articlesRelated[key][index].newArticles = [];
          newState.articlesRelated[key].newArticles.push(action.article);
        }
      } else {
        if (index === -1) newState.articlesRelated[key].push(action.item);
        else newState.articlesRelated[key][index] = action.item;
      }
      return newState;
    }
    case "removeSelectionCombo": {
      const { id, removed } = action;
      const key = id ? "oldArticlesRelated" : "newArticlesRelated";
      const searchKey = id ? "id" : "value";
      const { newState, index } = indexToCombo(
        tempState,
        key,
        searchKey,
        id ?? removed.value
      );
      if (id) {
        newState.articlesRelated[key].splice(index, 1);
        if (newState.articlesRelated.modifiedArticlesRelated) {
          newState.articlesRelated.modifiedArticlesRelated =
            newState.articlesRelated.modifiedArticlesRelated.filter(
              (f) => f.id !== id
            );
        }
      } else {
        newState.articlesRelated.newArticlesRelated =
          newState.articlesRelated.newArticlesRelated.filter(
            (f) => f.value !== removed.value
          );
      }
      return newState;
    }
    default:
      return state;
  }
}
