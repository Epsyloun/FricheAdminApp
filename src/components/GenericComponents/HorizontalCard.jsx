import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import { CardActionArea } from '@mui/material';

//StyledComponents
    const StyledCard = {
            borderRadius: '20px',
            animation: 'fade-in-down ease 0.5s',
            height:'100%',
            '&:hover':{
            margin: '-3px',
            border: '3px solid',
            borderColor: 'secondary.main',
          }
    }
    const StyledActionCard = {
        display: 'flex',
        wrap:"wrap",
        height:"100%"
    }

    const StyledCardMedia = {
        width:'35%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }
    const StyledBox = {
        display: 'flex',
        flexDirection: 'row',
        width:'65%',
        justifyContent: 'center',
    }

function HorizontalCard({image,title,info,subtitle, subtitle2}) {
    return (
        <Card sx={StyledCard}>
            <CardActionArea sx={StyledActionCard}>
                <CardMedia
                    sx={StyledCardMedia}
                    children={ <Icon color="secondary" className='icon-card'>{image}</Icon>}
                />
                <Box sx={StyledBox}>
                    <CardContent >
                    <Typography variant="subtitle1" color="text.secondary" align='center' component="div">
                        {title}
                    </Typography>
                    <Typography color="text" component="div" variant="h4" align='center'>
                        {info}
                    </Typography>
                    <Typography variant="subtitle2" className="subtitle-card-green"  component="div">
                        {subtitle}
                    </Typography>
                    <Typography variant="subtitle2" className="subtitle-card-red"  component="div">
                        {subtitle2}
                    </Typography>
                    </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    );
}

export {HorizontalCard};