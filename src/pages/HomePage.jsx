import { useState } from 'react'
import { Box, Drawer, AppBar, Toolbar, IconButton, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { MdMenu, MdHome } from 'react-icons/md'
import { RiPrinterFill } from 'react-icons/ri'
import { BiSolidError } from 'react-icons/bi'

import Sidebar from '../components/Sidebar'
import ButtonMenu from '../components/ButtonMenu'
import ThemeToggle from '../components/ThemeToggle'

const DRAWER_WIDTH = 260
const DRAWER_WIDTH_COLLAPSED = 64

const HomePage = ({ mode, setMode }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const urls = [
    '/content/esicont/es/engine/A01/html/B3E000000001201.html',
    '/content/esicont/html/vin.html',
    '/content/DefaultPage.html',
  ]

  const handleMenuClick = () => (isMobile ? setMobileOpen((p) => !p) : setCollapsed((p) => !p))
  const handleExpandRequest = () => setCollapsed(false)

  const currentDrawerWidth = isMobile ? DRAWER_WIDTH : (collapsed ? DRAWER_WIDTH_COLLAPSED : DRAWER_WIDTH)

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={() => setMobileOpen(false)}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: currentDrawerWidth,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          transition: theme.transitions.create('width'),
          '& .MuiDrawer-paper': {
            width: currentDrawerWidth,
            boxSizing: 'border-box',
            overflowX: 'hidden',
            transition: theme.transitions.create('width'),
          },
        }}
      >
        <Sidebar
          collapsed={!isMobile && collapsed}
          onExpandRequest={handleExpandRequest}
          mode={mode}
        />
      </Drawer>

      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <AppBar position="static" color="inherit" elevation={1}>
          <Toolbar sx={{ justifyContent: 'space-between', gap: 1, flexWrap: 'nowrap' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <IconButton onClick={handleMenuClick}>
                <MdMenu size={22} />
              </IconButton>

              {/* Botón Home */}
              <ButtonMenu
                icon={MdHome}
                url={urls[2]}
                target="contentIframe"
              />

              {/* 🟢 Botón DTCs corregido: label siempre presente */}
              <ButtonMenu
                icon={BiSolidError}
                label="DTCs"
                url="/content/dtc.html"
                target="contentIframe"
                color="warning"
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {/* <ButtonMenu label="Advertencia" url={urls[0]} /> */}
              <ButtonMenu icon={RiPrinterFill} printData />
              {/* <ButtonMenu label="VIN" url={urls[1]} /> */}
              <ThemeToggle mode={mode} setMode={setMode} />
              {/* <ButtonMenu profile url="https://c-rom.site/" avatarSrc="/images/profiledev.png" avatarAlt="Christian Romero" /> */}
            </Box>
          </Toolbar>
        </AppBar>

        <Box sx={{ flexGrow: 1, position: 'relative' }}>
          <Box
            component="iframe"
            id="print"
            name="contentIframe"
            src="/content/DefaultPage.html"
            title="Manual de Taller Mazda 3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            sx={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              border: 0,
              colorScheme: 'normal'
            }}
          />
        </Box>

        <Box sx={{ height: 30, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: 2 }}>
          <Typography variant="caption" color="text.secondary">Versión V2.0.1</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default HomePage