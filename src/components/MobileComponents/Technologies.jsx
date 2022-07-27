import React from 'react'
import { Divider, Grid, Stack, Typography } from '@mui/material';

//StyledComponents
    const StyledGrid = {
        background:"white",
        borderRadius:"20px",
        animation: 'fade-in ease 0.5s'
    }

function Technologies() {
    return (
        <Grid item mt="0.8em" p={2} xs={12} md={12} sx={StyledGrid}>
            <Typography variant="h5" align="center" ml="2%">
                Tecnologias
            </Typography>
            <Divider/>
            <Stack  display="flex" flexDirection="column" mt="0.5em">
                <Stack alignItems="center" mt="0.5em" mb="0.5em" flexDirection="row" justifyContent="center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" height="50px" alt="react logo"/>
                    <Typography variant="h6" align="center" ml="2%">
                        React
                    </Typography>
                </Stack>
                <Divider/>
                <Stack alignItems="center" mb="0.5em" flexDirection="row" justifyContent="center">
                    <img src="https://reacttraining.com/images/blog/reach-react-router-future.png" height="50px" alt="react router dom logo"/>
                    <Typography variant="h6" align="center" ml="2%">
                        React router DOM
                    </Typography>
                </Stack>
                <Divider/>
                <Stack alignItems="center" mb="0.5em" flexDirection="row" justifyContent="center">
                    <img src="https://mui.com/static/logo.png" height="50px" alt="mui logo"/>
                    <Typography variant="h6" align="center" ml="2%">
                        Material UI
                    </Typography>
                </Stack>
            </Stack>
        </Grid>
     );
}

export {Technologies};