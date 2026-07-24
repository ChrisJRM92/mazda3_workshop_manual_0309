import { createTheme } from '@mui/material/styles'

const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: { main: '#0956d2' },
    ...(mode === 'dark'
      ? {
        background: { default: '#121212', paper: '#181818' },
        text: { primary: '#f0f8ff', secondary: '#b0b3bd' },
      }
      : {
        background: { default: '#f4f5f7', paper: '#ffffff' },
        text: { primary: '#1a1a1a', secondary: '#5f6368' },
      }),
  },
  typography: {
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
  },
  shape: { borderRadius: 8 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': { height: '100%', overflow: 'hidden' },
        'h1, h2, h3, p': { margin: 0 },
        a: { textDecoration: 'none', color: 'inherit' },

        '*::-webkit-scrollbar': {
          width: 10,
          height: 10,
        },
        '*::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '*::-webkit-scrollbar-thumb': {
          background: mode === 'dark' ? '#464957' : '#c1c1c1',
          borderRadius: 6,
          border: mode === 'dark' ? '2px solid #1e1f25' : '1px solid #f4f5f7',
        },
        '*::-webkit-scrollbar-thumb:hover': {
          background: '#0956d2',
        },
        '*::-webkit-scrollbar-corner': {
          background: 'transparent',
        },

        '*': {
          scrollbarWidth: 'thin',
          scrollbarColor:
            mode === 'dark' ? '#464957 #1e1f25' : '#c1c1c1 #f4f5f7',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { textTransform: 'none', fontWeight: 500, borderRadius: 8 },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: { borderRadius: 8, marginLeft: 6, marginRight: 6, width: 'auto' },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: { fontSize: 12 },
      },
    },
  },
})

export default getTheme