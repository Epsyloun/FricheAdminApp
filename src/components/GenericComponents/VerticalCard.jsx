import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

//Styled Components
    const StyledCard = {
        display: 'flex',
        height:"100%",
        flexDirection:"column",
        borderRadius: '20px',
        animation: 'fade-in-down ease 0.5s',
        '&:hover':{
        margin: '-3px',
        border: '3px solid',
        borderColor: 'secondary.main',
        }
    }

    const StyledBox = {
        height:"100%",
        display: 'flex',
        flexDirection: 'column',
        width:'100%',
        justifyContent:"center"
    }

    const StyledCardMedia = {
        width:'90%',
        height:"100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin:'5%',

    }

function VerticalCard({image,title,info,subtitle}) {
    return (
        <Card sx={StyledCard}>
            <Typography mr="0.4em" ml="0.4em" mt="0.5em" variant="h4" color="text.primary" align='center' >
                {title}
            </Typography>
            <Box sx={StyledBox}>
                    <CardMedia
                        sx={StyledCardMedia}
                        children={image}
                    />
                    <Typography variant="subtitle2"className="text.secondary" component="div" align='center'>
                        {subtitle}
                    </Typography>
            </Box>
        </Card>
    );
}

export {VerticalCard};