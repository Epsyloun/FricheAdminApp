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

//Styled Components
    const StyledText = {color:"text.accent"}

    const StyledCard = {
        borderRadius: '20px',
        animation: 'fade-in ease 0.5s',
        display: 'flex',
        wrap:"wrap",
        height:"100%",
        '&:hover':{
        margin: '-3px',
        border: '3px solid',
        borderColor: 'secondary.main',
        },
    }
    const StyledCardMedia = {
        width:'50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:'25%',
        padding:'5% 0% 5%',

    }

    const StyledBox = {
        display: 'flex',
        flexDirection: 'row',
        width:'100%',
        alignItems:"center",
        justifyContent:"center"
    }
    const StyledCardContent = { flex: '1 1 auto' }

function FinanzasVerticalCard({image,title,info,subtitle}) {
    return (
    <>
            <Card className="styled-card" sx={StyledCard}>
            <CardActionArea sx={StyledText}>
                    <Box sx={StyledBox}>
                        <CardContent sx={StyledCardContent}>
                        <Typography variant="subtitle1" color="text.primary" align='center' >
                            {title}
                        </Typography>
                        <CardMedia
                            sx={StyledCardMedia}
                            children={<Icon color="secondary"  className='icon-card'>{image}</Icon>}
                        />
                        <Typography color="text.primary"  noWrap={false} variant="h4" align='center'>
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