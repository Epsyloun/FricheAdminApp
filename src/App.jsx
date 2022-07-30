import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import MainContainer from './routes/MainApp';
import { useTheme} from './hooks/useTheme';


function App() {
    //variable que contiene el tema traido desde el hook useTheme
    const theme = createTheme(useTheme());

    //TODO Paginacion Deudas
    //TODO poner parte de tecnologias en footer
    //TODO Quitar footer en mobile

    return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <MainContainer/>
                </BrowserRouter>
            </ThemeProvider>
    );
  }

  export default App;