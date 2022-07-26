import React from 'react'
import { Box } from '@mui/system';
import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, Icon, Stack, Typography } from '@mui/material';

function CardDeuda({initial, title, info, subtitle}) {

    //Funcion para mostrar que se clickea la card
    function showOptions(){
        console.log('click');
    }
    return (
    <>
    <Card className="orange-card" sx={{ display: 'flex' }}>
        <CardActionArea  onClick={showOptions} sx={{color:'hotpink'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width:'100%'}}>
                <CardContent sx={{padding:'5%', flex: '1 1 auto' }}>
                <Stack spacing={2} direction="row" alignItems="center">
                    <Avatar sx={{ bgcolor: 'hotpink', color:'white' }}>{initial}</Avatar>
                    <Typography variant="subtitle1" color="text.primary" align='center' component="div">
                        {title}
                    </Typography>
                </Stack>
                <Typography component="div" variant="h4" align='center' color="text.primary">
                    ${info}
                </Typography>
                <Typography variant="subtitle2" align="right" component="div" color="text.secondary">
                    {subtitle}
                </Typography>
                </CardContent>
                <Divider/>
            </Box>
        </CardActionArea>
    </Card>
    </>
     );
}

export {CardDeuda};