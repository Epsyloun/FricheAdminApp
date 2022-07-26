import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import { CardActionArea } from '@mui/material';

//CSS PARA PONER LOS ... EN LAS CARDS DEL TEXTO
/*
sx={{overflow: "hidden", textOverflow: "ellipsis", width:'20rem'}}
*/

function FinanzasVerticalCard({image,title,info,subtitle}) {
    return (
    <>
            <Card className="orange-card" sx={{ display: 'flex', height:"100%"}}>
            <CardActionArea sx={{color:"hotpink"}}>
                    <Box sx={{ display: 'flex', flexDirection: 'row',width:'100%', alignItems:"center", justifyContent:"center"}}>
                        <CardContent sx={{ flex: '1 1 auto' }}>
                        <Typography variant="subtitle1" color="text.primary" align='center' >
                            {title}
                        </Typography>
                        <CardMedia
                            sx={{
                                width:'50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft:'25%',
                                padding:'5% 0% 5%',

                            }}
                            children={<Icon className='icon-card'>{image}</Icon>}
                        />
                        <Typography noWrap={false} variant="h4" align='center'>
                            {info}
                        </Typography>
                        <Typography variant="subtitle2" className="subtitle-card-green" component="div" align='center'>
                            {subtitle}
                        </Typography>
                        </CardContent>
                    </Box>
                </CardActionArea>
                </Card>
    </>
    );
}

export {FinanzasVerticalCard};