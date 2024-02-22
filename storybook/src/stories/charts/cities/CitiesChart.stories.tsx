import { CitiesChart } from "@wallavi/component-library";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Charts/CitiesChart",
  component: CitiesChart,
} satisfies Meta<typeof CitiesChart>;

type Story = StoryObj<typeof meta>;

export default meta;

const data = [
  { name: "CDMX", value: 15998 },
  { name: "GDL", value: 7899 },
  { name: "Nayarit", value: 8559 },
];

export const Primary: Story = {
  args: {
    data: data.sort((a, b) => b.value - a.value),
    extended: true,
  },
};
