import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';

function FinanzasHorizontalCard({image,title,info,subtitle}) {
    return (
    <>
        <Card className="orange-card" sx={{ display: 'flex', wrap:"wrap", height:"100%" }}>
            <CardMedia
                sx={{
                    width:'50%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}
                children={ <Icon className='icon-card'>{image}</Icon>}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', width:'65%',  justifyContent: 'center',}}>
                <CardContent >
                <Typography variant="subtitle1" color="text.secondary" align='center' component="div">
                    {title}
                </Typography>
                <Typography component="div" variant="h4" align='center'>
                    {info}
                </Typography>
                <Typography variant="subtitle2" className="subtitle-card-green"  component="div">
                    {subtitle}
                </Typography>
                </CardContent>
            </Box>
        </Card>
    </>
    );
}

export {FinanzasHorizontalCard};