import React from 'react'
import { Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
function Footer() {

    //StyledComponents
    const StyledBox ={
        marginTop:"20px",
        paddingTop:'2%',
        paddingBottom:'2%',
        width: '100%',
        backgroundColor: 'LightPink',
    }
    const StyledSecundaryBox ={
        width: '100%',
        backgroundColor: 'pink',
    }

    return (
        <Grid  container sx={{ bottom: 0, left: 0, right: 0, alignText:'center',  animation: 'fadeInDown ease 1s'}} >
            <Grid item xs={12}>
                <Box sx={StyledBox}>
                    <Typography variant="h6" color="white" align="center">
                        © 2022 Friche Derechos Reservados
                    </Typography>
                </Box>
                <Box sx={StyledSecundaryBox}>
                </Box>
                <Box className="only-mobile-footer" sx={StyledSecundaryBox}/>
            </Grid>
        </Grid>
    );
}

export {Footer};