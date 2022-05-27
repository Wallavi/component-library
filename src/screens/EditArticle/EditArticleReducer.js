export default function EditArticle(state, action) {
  const tempState = { ...state };
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
    default:
      return state;
  }
}
