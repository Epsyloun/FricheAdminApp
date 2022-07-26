import React from 'react'
import { Divider, Grid, IconButton, Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function SocialMedia() {
    return (
        <Grid  item mt="0.8em" p={2} xs={12} md={12} sx={{background:"white", borderRadius:"20px",animation: 'fade-in ease 1s'}}>
            <Typography variant="h5" align="center" ml="2%">
                Redes Sociales
            </Typography>
            <Divider/>
            <Stack  display="flex" flexDirection="row" justifyContent="space-around">
            <IconButton href="https://github.com/Epsyloun" target="_blank">
                <GitHubIcon sx={{color:'hotpink', fontSize:"2em"}}/>
            </IconButton>
            <IconButton href="https://www.instagram.com/frichesv/" target="_blank">
                <InstagramIcon sx={{color:'hotpink', fontSize:"2em"}}/>
            </IconButton>
            </Stack>
        </Grid>
     );
}

export {SocialMedia};