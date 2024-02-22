import { BarsChart } from "@wallavi/component-library";
//import { BarsChart } from "../../../../../library/src/charts/bars";
import type { Meta, StoryObj } from "@storybook/react";
import { BarsChartData } from "../types";

const meta: Meta = {
  title: "Charts/Bars",
  component: BarsChart,
};

type Story = StoryObj<typeof meta>;

export default meta;

const generateRandomDate = (from: Date, to: Date) => {
  let randomDate: Date = new Date(
    from.getTime() + Math.random() * (to.getTime() - from.getTime())
  );

  return randomDate;
};

const generateData = () => {
  const numOfGraps = 1;
  let tempObj = {};
  for (let i = 0; i < numOfGraps; i++) {
    const tempArray: BarsChartData[] = Array.from({ length: 10 }, () => {
      return {
        date: generateRandomDate(new Date(2023, 0, 1), new Date()),
        value: Math.floor(Math.random() * (10000 - 100 + 1)) + 100,
      };
    });

    tempArray.sort((a, b) => +a.date - +b.date);
    const item = { [`obj-${i}`]: tempArray };
    tempObj = { ...tempObj, ...item };
  }
  //setData(tempObj);

  let newData: BarsChartData[] = [];
  [newData] = Object.values(tempObj);
  return newData;
};

export const Primary: Story = {
  args: {
    data: generateData(),
  },
};
