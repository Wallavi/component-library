import { v4 as uuidv4 } from "uuid";

const formatItem = (originalItem) => {
  const item = JSON.parse(JSON.stringify(originalItem));
  item.description = item.name;
  delete item.name;
  return item;
};

export const functions = {
  setName: (state, action) => {
    const key = action.type.replace("set", "").toLowerCase();
    state[action.index][key] = action[key];
    return { state, params: { value: formatItem(state[action.index]) } };
  },
  setQty: (...arg) => functions.setName(...arg),
  addArticles: (state, action) => {
    const related = state[action.index].articles;
    let article;
    if (related.findIndex((f) => f.id === action.article.id) === -1) {
      article = { ...action.article, src: action.article.source };
      state[action.index].articles.push(article);
    }
    const params = article
      ? { article, item: formatItem(state[action.index]) }
      : undefined;
    return { state, params };
  },
  addSelection: (state) => {
    const newSelection = {
      value: uuidv4(),
      name: "Nueva selección",
      articles: [],
      qty: 1,
    };
    state.push(newSelection);
    return { state, params: { newSelection } };
  },
  removeSelection: (state, action) => {
    const [removed] = state.splice(action.index, 1);
    return { state, params: { removed } };
  },
};
