import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import MainContainer from './routes/MainApp';
import { useThemeHook } from './hooks/useTheme';


function App() {
    //variable que contiene el tema traido desde el hook useTheme
    const theme = createTheme(useThemeHook());

    return (
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <MainContainer/>
                </BrowserRouter>
            </ThemeProvider>
    );
}

export default App;