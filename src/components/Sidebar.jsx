import React, { useState } from 'react'
import { Box, Toolbar, Divider, List, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material'
import { manualSections } from '../data/manualSections'
import SidebarSection from './SidebarSection'

// 🖼️ RUTAS DE LAS IMÁGENES SEGÚN EL MODO
const LOGOS = {
    dark: {
        icon: '/images/mazdaLogoState1.png',      // Logo icono (blanco/claro)
        text1: '/images/mazdaLogoState2.png',     // Marca Mazda (blanco/claro)
        text2: '/images/mazdaLogoState21.png',    // Modelo "3" (blanco/claro)
    },
    light: {
        icon: '/images/mazdaLogoState3.png',   // Logo icono (negro/oscuro)
        text1: '/images/mazdaLogoState4.png',  // Marca Mazda (negro/oscuro)
        text2: '/images/mazdaLogoState22.png', // Modelo "3" (negro/oscuro)
    }
}

const Sidebar = ({ collapsed, onExpandRequest, mode = 'dark', onNavigate }) => {
    const [selectedHref, setSelectedHref] = useState(null)

    const currentLogos = LOGOS[mode] || LOGOS.dark

    const handleSelect = (href) => {
        setSelectedHref(href)
        onNavigate?.()
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Cabecera del Sidebar */}
            <Toolbar
                component="a"
                href="/content/DefaultPage.html"
                target="contentIframe"
                sx={{ display: 'flex', justifyContent: 'center', gap: 1, px: 1 }}
            >
                <Box
                    component="img"
                    src={collapsed ? currentLogos.icon : currentLogos.text1}
                    alt="Mazda"
                    sx={{ height: collapsed ? 40 : 48, objectFit: 'contain' }}
                />
                {!collapsed && (
                    <Box
                        component="img"
                        src={currentLogos.text2}
                        alt="Mazda 3"
                        sx={{ height: 48, objectFit: 'contain' }}
                    />
                )}
            </Toolbar>

            <Divider />

            {/* Lista de navegación de secciones del manual */}
            <List sx={{ overflowY: 'auto', overflowX: 'hidden', flexGrow: 1, py: 1 }}>
                {manualSections.map((item) => {
                    // 🟢 OPCIÓN 1: Tipo 'divider' desde el archivo manualSections.js
                    if (item.type === 'divider') {
                        return <Divider key={item.id} sx={{ my: 1.5 }} />
                    }

                    // Renderizado de Secciones
                    if (item.type === 'section') {
                        return (
                            <SidebarSection
                                key={item.id}
                                section={item}
                                collapsed={collapsed}
                                onExpandRequest={onExpandRequest}
                                selectedHref={selectedHref}
                                onSelect={handleSelect}
                            />
                        )
                    }

                    // Renderizado de Enlaces Simples (soporta si quieres forzar un divisor antes de un ID específico)
                    return (
                        <React.Fragment key={item.id}>
                            {/* 🟢 OPCIÓN 2: Si el elemento actual es el 'manual_usuario', pone un divisor automáticamente antes */}
                            {item.id === 'manual_usuario' && <Divider sx={{ my: 1.5 }} />}

                            <SimpleLink
                                item={item}
                                collapsed={collapsed}
                                selected={selectedHref === item.href}
                                onSelect={handleSelect}
                            />
                        </React.Fragment>
                    )
                })}
            </List>
        </Box>
    )
}

const SimpleLink = ({ item, collapsed, selected, onSelect }) => {
    const Icon = item.icon
    const button = (
        <ListItemButton
            component="a"
            href={item.href}
            target="contentIframe"
            selected={selected}
            onClick={() => onSelect(item.href)}
            sx={{ justifyContent: collapsed ? 'center' : 'flex-start' }}
        >
            <ListItemIcon sx={{ minWidth: collapsed ? 'auto' : 36, justifyContent: 'center', fontSize: 20 }}>
                {Icon && <Icon />}
            </ListItemIcon>
            {!collapsed && <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 14 }} />}
        </ListItemButton>
    )
    return collapsed ? <Tooltip title={item.label} placement="right">{button}</Tooltip> : button
}

export default Sidebar