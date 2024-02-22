import { CircularChart } from "@wallavi/component-library";
import { CircularChartData } from "../types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Charts/Circular",
  component: CircularChart,
  argTypes: {
    type: { type: "select", options: ["pie", "circular"] },
  },
};

type Story = StoryObj<typeof meta>;

export default meta;
const mexicanStates = [
  "Aguascalientes",
  "Baja California",
  "Baja California Sur",
  "Campeche",
  "Chiapas",
  "Chihuahua",
  "Coahuila",
  "Colima",
  "Durango",
  "Guanajuato",
  "Guerrero",
  "Hidalgo",
  "Jalisco",
  "México",
  "Michoacán",
  "Morelos",
  "Nayarit",
  "Nuevo León",
  "Oaxaca",
  "Puebla",
  "Querétaro",
  "Quintana Roo",
  "San Luis Potosí",
  "Sinaloa",
  "Sonora",
  "Tabasco",
  "Tamaulipas",
  "Tlaxcala",
  "Veracruz",
  "Yucatán",
  "Zacatecas",
];

const generateData = () => {
  const numOfGraps = 1;
  let tempObj = {};
  for (let i = 0; i < numOfGraps; i++) {
    const tempArray: CircularChartData[] = Array.from({ length: 5 }, () => {
      const randomIndex = Math.floor(Math.random() * mexicanStates.length);
      return {
        label: mexicanStates[randomIndex],
        value: Math.floor(Math.random() * (10000 - 100 + 1)) + 100,
      };
    });
    tempArray.sort((a, b) => +a.label - +b.label);
    const item = { [`obj-${i}`]: tempArray };
    tempObj = { ...tempObj, ...item };
  }

  let newData: CircularChartData[] = [];
  [newData] = Object.values(tempObj);

  return newData;
};

export const Primary: Story = {
  args: { data: generateData(), label: "Mejores ciudades", type: "pie" },
};
