import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography"
import LightTooltip from './index'
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Atoms/LightTooltip",
  component: LightTooltip,
} satisfies Meta<typeof LightTooltip>;

type Story = StoryObj<typeof meta>;

export default meta;

export const Primary: Story = {
  args: {
    title:
      (<Typography variant="body2" fontWeight={600}>
        Se emite una alerta al alcanzar la cantidad de unidades mínimas
        especificadas para el producto
      </Typography>),
    children: (<Avatar alt="Helpbox" sx={{ width: 25, height: 25, padding: 1.5 }} >i</Avatar>)
  },
};
