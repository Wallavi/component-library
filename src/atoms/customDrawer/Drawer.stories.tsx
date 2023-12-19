import React from 'react'
import CustomDrawer from './Drawer'
import PieChartIcon from '@mui/icons-material/PieChart'
import PointOfSaleIcon from '@mui/icons-material/PointOfSale'
import PaymentsIcon from '@mui/icons-material/Payments'
import StoreIcon from '@mui/icons-material/Store'
import LiquorIcon from '@mui/icons-material/Liquor'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import type { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Drawer/CustomDrawer',
  component: CustomDrawer,
} satisfies Meta<typeof CustomDrawer>

type Story = StoryObj<typeof meta>

export default meta

const boxes = [
  {
    id: '1',
    title: 'Métricas',
    icon: <PieChartIcon />,
  },
  {
    id: '2',
    title: 'Punto de venta',
    icon: <PointOfSaleIcon />,
  },
  {
    id: '3',
    title: 'Órdenes',
    icon: <PaymentsIcon />,
  },
  {
    id: '4',
    title: 'Tiendas',
    icon: <StoreIcon />,
  },
  {
    id: '5',
    title: 'Artículos',
    icon: <LiquorIcon />,
  },
  {
    id: '6',
    title: 'Colaboradores',
    icon: <PeopleAltIcon />,
  },
]

export const Primary: Story = {
  args: {
    boxes: boxes,
    customLargeLogo:
      'https://depot.center/static/media/horizontal-logo.a1f81371.svg',
    customSmallLogo:
      'https://www.wallavi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-001.819f6bda.png&w=128&q=75',
  },
}
