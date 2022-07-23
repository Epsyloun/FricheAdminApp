import React from 'react'
import { Grid, IconButton, Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
function Footer() {

    return (
    <>
        <Grid  container sx={{ bottom: 0, left: 0, right: 0, alignText:'center',  animation: 'fadeInDown ease 1s'}} >
            <Grid item xs={12}>
                <Box
                    sx={{
                        marginTop:"20px",
                        paddingTop:'2%',
                        paddingBottom:'2%',
                        width: '100%',
                        backgroundColor: 'LightPink',
                    }}
                >
                    <Typography variant="h6" color="white" align="center">
                        © 2022 Friche Derechos Reservados
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: '100%',
                        backgroundColor: 'pink',
                    }}
                >
                </Box>
                <Box
                    className="only-mobile-footer"
                    sx={{
                        width: '100%',
                        backgroundColor: 'pink',
                    }}
                />
            </Grid>
        </Grid>
    </>
    );
}

export {Footer};