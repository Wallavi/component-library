import { CurvesChart } from "@wallavi/component-library";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Charts/Curves",
  component: CurvesChart,
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
  const numOfGraps = 2;
  let tempObj = {};
  for (let i = 0; i < numOfGraps; i++) {
    const tempArray = Array.from({ length: 5 }, () => {
      return {
        date: generateRandomDate(new Date(2023, 0, 1), new Date()),
        value: Math.floor(Math.random() * (10000 - 100 + 1)) + 100,
      };
    });
    tempArray.sort((a, b) => +a.date - +b.date);

    const item = { [`obj-${i}`]: tempArray };
    tempObj = { ...tempObj, ...item };
  }

  return tempObj;
};

export const Primary: Story = {
  args: {
    data: generateData(),
    label: "Mejores ciudades",
    tension: 0.1,
    colors: ["#00A99D", "#EA456D"],
  },
};
