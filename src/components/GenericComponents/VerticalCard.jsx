import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';

function VerticalCard({image,title,info,subtitle}) {
    return (
    <>
            <Card className="orange-card" sx={{ display: 'flex', height:"100%" }}>
                <Box sx={{ display: 'flex', flexDirection: 'row',width:'100%', alignItems:"center", justifyContent:"center"}}>
                    <CardContent sx={{ flex: '1 1 auto' }}>
                    <Typography variant="subtitle1" color="text.secondary" align='center' >
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
                    <Typography variant="h4" align='center' sx={{flexWrap:"wrap"}}>
                        {info}
                    </Typography>
                    <Typography variant="subtitle2"className="text.secondary" component="div" align='center'>
                        {subtitle}
                    </Typography>
                    </CardContent>
                </Box>
                </Card>
    </>
    );
}

export {VerticalCard};