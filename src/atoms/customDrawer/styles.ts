import { Theme, styled, CSSObject } from '@mui/material/styles'
import { Typography } from '@mui/material'
import { BoxProp } from './types'
import IconButton from '@mui/material/IconButton'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import MuiDrawer from '@mui/material/Drawer'
import List from '@mui/material/List'

interface DrawerProps {
  theme: Theme
  open?: boolean
}

interface ListItemButtonDrawerProps {
  selectedbox: BoxProp | null
  box: BoxProp
}

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  paddingBottom: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  paddingBottom: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
})

export const DrawerHeaderOpen = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexWrap: 'wrap',
  gap: '10px',
})

export const ImageDrawer = styled('img')({
  padding: '20px 0',
})

export const DrawerHeaderClose = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'column',
  flexWrap: 'wrap',
  gap: '10px',
})

export const Contract = styled(Typography)({
  color: 'black',
  width: '90%',
  display: 'flex',
  justifyContent: 'flex-start',
})

export const ListDrawer = styled(List)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const ListItemButtonDrawer = styled(ListItemButton)(
  ({ selectedbox, box }: ListItemButtonDrawerProps) => ({
    minHeight: 48,
    borderRadius: selectedbox === box ? '10px' : '0',
    background: selectedbox === box ? 'rgb(245, 245, 245)' : 'inherit',
    '&:hover': {
      borderRadius: '10px',
    },
  })
)

export const ListItemIconDrawer = styled(ListItemIcon)(
  ({ selectedbox, box }: ListItemButtonDrawerProps) => ({
    color: selectedbox === box ? 'rgb(85, 144, 255)' : 'rgb(117, 117, 117)',
  })
)

export const Icon = styled(IconButton)({
  display: 'flex',
  gap: '23px',
  width: '100%',
  height: '48px',
  padding: '8px 20px',
  borderRadius: '0',
  justifyContent: 'flex-start',
  '&:hover': {
    borderRadius: '10px',
  },
})

export const IconClose = styled(IconButton)({
  px: 1.5,
  width: '100%',
  borderRadius: '10px',
  padding: '8px 20px',
  '&:hover': {
    borderRadius: '10px',
  },
})

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }: DrawerProps) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))
