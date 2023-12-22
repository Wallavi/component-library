import { PriceFilter } from "@wallavi/component-library";
import { prices } from "./mockdata";
import { housePrices } from "./mockdata2";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Grid/filters/PriceFilter",
  component: PriceFilter,
} satisfies Meta<typeof PriceFilter>;

type Story = StoryObj<typeof meta>;

export default meta;

const dataPrices = prices.map((price) => price.price);
const dataHousePrices = housePrices.map((price) => price.price);

export const Primary: Story = {
  args: {
    buttonLabel: "Price",
    prices: dataPrices,
    getFilterPrices: () => {},
  },
};

export const Secondary: Story = {
  args: {
    buttonLabel: "House Prices",
    prices: dataHousePrices,
    getFilterPrices: () => {},
  },
};
