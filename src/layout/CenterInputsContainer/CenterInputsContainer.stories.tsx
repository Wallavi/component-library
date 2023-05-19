import React from "react";
import CenterInputsContainer from "./index";
import Input from "../../atoms/Input";
import Box from "@mui/material/Box";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Layouts/CenterInputsContainer",
  component: CenterInputsContainer,
} satisfies Meta<typeof CenterInputsContainer>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    children: (<>
      <Input
        id="article_price_buy"
        label="Precio de compra"
        type="number"
        value={300}
      />
      <Box sx={{width: 80}} />
      <Input
        id="article_price_sell"
        label="Precio de venta"
        type="number"
        value={200}
      />
    </>)
  },
};
