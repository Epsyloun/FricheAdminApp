import React from 'react'
import { Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

//StyledComponents
    const StyledGrid = {
        background:"white",
        borderRadius:"20px",
        animation: 'fade-in ease 1s'
    }
    const StyledIcon = {color:'hotpink', fontSize:"2em"}

function SocialMedia() {
    return (
        <Grid  item mt="0.8em" p={2} xs={12} md={12} sx={StyledGrid}>
            <Typography variant="h5" align="center" ml="2%">
                Redes Sociales
            </Typography>
            <Divider/>
            <Stack  display="flex" flexDirection="row" justifyContent="space-around">
            <IconButton href="https://github.com/Epsyloun" target="_blank">
                <GitHubIcon sx={StyledIcon}/>
            </IconButton>
            <IconButton href="https://www.instagram.com/frichesv/" target="_blank">
                <InstagramIcon sx={StyledIcon}/>
            </IconButton>
            </Stack>
        </Grid>
     );
}

export {SocialMedia};