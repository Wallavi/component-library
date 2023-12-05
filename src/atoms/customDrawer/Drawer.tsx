import React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen'
import OpenInFullIcon from '@mui/icons-material/OpenInFull'
import LogoutIcon from '@mui/icons-material/Logout'
import {
  DrawerHeaderOpen,
  DrawerHeaderClose,
  Contract,
  Icon,
  IconClose,
  ImageDrawer,
  Drawer,
  ListDrawer,
  ListItemButtonDrawer,
  ListItemIconDrawer,
} from './styles'

interface BoxesProps {
  boxes: {
    id: string
    title: string
    icon: any
  }[]
}

export default function CustomDrawer({ boxes }: BoxesProps) {
  const [open, setOpen] = useState<boolean>(false)
  const [selectedBox, setSelectedBox] = useState<any>(null)

  const imageWidth = !open ? '40' : '120'

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleItemClick = (box: any) => {
    setSelectedBox(box)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <ListDrawer>
          <ImageDrawer
            width={imageWidth}
            height={80}
            src={
              open
                ? 'https://depot.center/static/media/horizontal-logo.a1f81371.svg'
                : 'https://www.wallavi.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject-001.819f6bda.png&w=128&q=75'
            }
            alt=""
          />
          {[...boxes].map((box) => (
            <ListItem key={box.id} disablePadding sx={{ display: 'block' }}>
              <ListItemButtonDrawer
                onClick={() => handleItemClick(box)}
                selectedBox={selectedBox}
                box={box}
                sx={{
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIconDrawer
                  selectedBox={selectedBox}
                  box={box}
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {box.icon}
                </ListItemIconDrawer>

                <ListItemText
                  primary={box.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButtonDrawer>
            </ListItem>
          ))}
        </ListDrawer>
        {open ? (
          <DrawerHeaderOpen>
            <Icon onClick={handleDrawerClose}>
              <CloseFullscreenIcon />
              <Contract>Contraer</Contract>
            </Icon>
            <Icon>
              <LogoutIcon />
              <Contract>Cerrar sesión</Contract>
            </Icon>
          </DrawerHeaderOpen>
        ) : (
          <DrawerHeaderClose>
            <IconClose aria-label="open drawer" onClick={handleDrawerOpen}>
              <OpenInFullIcon sx={{ height: '32px' }} />
            </IconClose>
            <IconClose aria-label="open drawer">
              <LogoutIcon sx={{ height: '32px' }} />
            </IconClose>
          </DrawerHeaderClose>
        )}
      </Drawer>
    </Box>
  )
}
