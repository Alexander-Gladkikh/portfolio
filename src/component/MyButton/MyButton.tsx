import React from 'react';
import {Button, createTheme, ThemeProvider} from "@mui/material";
import type {} from '@mui/lab/themeAugmentation';
import '@mui/lab/themeAugmentation';

const MyButton: React.FC<any> = ({children, startIcon, ...props}) => {


    const theme = createTheme({
        components: {
            MuiTimeline: {
                styleOverrides: {
                    root: {
                        backgroundColor: 'red',
                    },
                },
            },
        },
    });


    return (
        <ThemeProvider theme={theme}>
            <Button sx={{borderRadius: '35px'}} variant="outlined" startIcon={startIcon}>
                {children}
            </Button>
</ThemeProvider>
    );
};

export default MyButton;