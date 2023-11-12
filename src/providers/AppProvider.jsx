import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import PrimaryRouter from '../routers/PrimaryRouter';

function AppProvider() {

    const lightTheme = createTheme({
        palette: {
            mode: 'light',
            background: {
                default: '#A0A0A0',
                paper: '#CCCCCC'
            },
            primary: {
                main: '#005500',
            },
            secondary: {
                main: '#000055',
            },
        },
    });

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <PrimaryRouter />
            </ThemeProvider>
        </LocalizationProvider>
    );
}

export default AppProvider;