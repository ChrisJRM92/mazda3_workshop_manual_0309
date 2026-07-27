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

  const urls = [
    '/content/esicont/es/engine/A01/html/B3E000000001201.html',
    '/content/esicont/html/vin.html',
    '/content/DefaultPage.html',
  ]

  const handleMenuClick = () => setCollapsed((p) => !p)
  const handleExpandRequest = () => setCollapsed(false)

  // En mobile el layout SIEMPRE reserva solo el ancho angosto (rail de íconos).
  // El ancho expandido en mobile se maneja como overlay flotante, no afecta el layout.
  const layoutDrawerWidth = isMobile
    ? DRAWER_WIDTH_COLLAPSED
    : (collapsed ? DRAWER_WIDTH_COLLAPSED : DRAWER_WIDTH)

  const isMobileExpanded = isMobile && !collapsed

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Drawer
        variant="permanent"
        open
        sx={{
          width: layoutDrawerWidth,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          transition: theme.transitions.create('width'),
          '& .MuiDrawer-paper': {
            width: isMobileExpanded ? DRAWER_WIDTH : layoutDrawerWidth,
            boxSizing: 'border-box',
            overflowX: 'hidden',
            transition: theme.transitions.create('width'),
            ...(isMobileExpanded && {
              position: 'fixed',
              top: 0,
              left: 0,
              height: '100%',
              zIndex: theme.zIndex.drawer + 2,
              boxShadow: 6,
            }),
          },
        }}
      >
        <Sidebar
          collapsed={collapsed}
          onExpandRequest={handleExpandRequest}
          mode={mode}
          onNavigate={() => isMobile && setCollapsed(true)}
        />
      </Drawer>

      {/* Backdrop: click afuera cierra el sidebar expandido en mobile */}
      {isMobileExpanded && (
        <Box
          onClick={() => setCollapsed(true)}
          sx={{
            position: 'fixed',
            inset: 0,
            bgcolor: 'rgba(0,0,0,0.5)',
            zIndex: theme.zIndex.drawer + 1,
          }}
        />
      )}

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

              {/* Botón DTCs */}
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