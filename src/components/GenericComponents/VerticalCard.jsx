import React from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import { CardActionArea } from '@mui/material';

//Styled Components
    const StyledCard = { display: 'flex', height:"100%" }

    const StyledText = {color:'hotpink'}

    const StyledBox = {
        display: 'flex',
        flexDirection: 'row',
        width:'100%',
        alignItems:"center",
        justifyContent:"center"
    }

    const StyledCardContent = { flex: '1 1 auto' }
    const StyledCardMedia = {
        width:'50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:'25%',
        padding:'5% 0% 5%',

    }

function VerticalCard({image,title,info,subtitle}) {
    return (
        <Card className="styled-card" sx={StyledCard}>
            <CardActionArea sx={StyledText}>
                <Box sx={StyledBox}>
                    <CardContent sx={StyledCardContent}>
                    <Typography variant="subtitle1" color="text.secondary" align='center' >
                        {title}
                    </Typography>
                    <CardMedia
                        sx={StyledCardMedia}
                        children={<Icon className='icon-card'>{image}</Icon>}
                    />
                    <Typography color="text.secondary" variant="h4" align='center'>
                        {info}
                    </Typography>
                    <Typography variant="subtitle2"className="text.secondary" component="div" align='center'>
                        {subtitle}
                    </Typography>
                    </CardContent>
                </Box>
            </CardActionArea>
        </Card>
    );
}

export {VerticalCard};