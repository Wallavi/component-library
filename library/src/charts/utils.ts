export const chartColors = {
  "5A": "#95A4FC",
  "5B": "#A8C5DA",
  "5C": "#A1E3CB",
  "5D": "#B1E3FF",
  "5E": "#1C1C1C",
};

export const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

interface IconColor {
  [key: string]: {
    background: string;
    font: string;
  };
}

export const iconColor: IconColor = {
  green: { background: "#D9F7E7", font: "#4AD991" },
  yellow: { background: "#FEF2D6", font: "#FEC53D" },
  gray: { background: "#FAFAFB", font: "#E9E9EE" },
  orange: { background: "#FFDED2", font: "#FF9871" },
};
