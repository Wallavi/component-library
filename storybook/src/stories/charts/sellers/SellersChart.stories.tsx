import { SellersChart } from "@wallavi/component-library";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Charts/SellersChart",
  component: SellersChart,
  extended: {
    type: "boolean",
    defaultValue: false,
  },
} satisfies Meta<typeof SellersChart>;

type Story = StoryObj<typeof meta>;

export default meta;

const data = [
  { name: "Luis B.", sells: 15998, percent: 65 },
  { name: "Luis B.", sells: 7899, percent: 22 },
  { name: "Luis B.", sells: 8559, percent: 25 },
  { name: "Luis B.", sells: 6559, percent: 10 },
  { name: "Luis B.", sells: 3559, percent: 5 },
];

export const Primary: Story = {
  args: {
    data: data.sort((a, b) => b.sells - a.sells),
    extended: true,
  },
};
