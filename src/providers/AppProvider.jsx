import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import PrimaryRouter from '../routers/PrimaryRouter';

function AppProvider() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <PrimaryRouter />
        </LocalizationProvider>
    );
}

export default AppProvider;