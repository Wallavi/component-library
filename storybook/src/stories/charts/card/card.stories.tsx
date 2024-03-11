import { CardChart } from "@wallavi/component-library";
//import { CardChart } from "../../../../../library/src/charts/card";
import type { Meta, StoryObj } from "@storybook/react";
import { MultilineChart } from "@mui/icons-material";

const meta: Meta = {
  title: "Charts/CardChart",
  component: CardChart,
  argTypes: {
    iconTheme: {
      type: "select",
      options: ["green", "yellow", "gray", "orange"],
    },
  },
} satisfies Meta<typeof CardChart>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    label: "Ventas netas",
    value: "$ 11,598.00",
    percent: -30,
    subLabel: "vs. el mes pasado",
    icon: MultilineChart,
    iconTheme: "green",
  },
};
