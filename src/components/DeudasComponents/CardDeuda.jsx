import React from 'react'
import { Avatar, Card, CardActionArea, CardContent, Divider, Stack, Typography } from '@mui/material';

//Styled Components
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

const StyledText = {color:"text.avatar"}

const StyledCardContent={padding:'5%', flex: '1 1 auto' }

const StyledAvatar = { backgroundColor: 'text.avatar', color:'white' }

function CardDeuda({initial, title, info, subtitle}) {

    //Funcion para mostrar que se clickea la card
    function showOptions(){
        console.log('click');
    }
    return (
    <Card sx={StyledCard}>
        <CardActionArea  onClick={showOptions} sx={StyledText}>
                <CardContent sx={StyledCardContent}>
                    <Stack spacing={2} direction="row" alignItems="center">
                        <Avatar sx={StyledAvatar}>{initial}</Avatar>
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
        </CardActionArea>
    </Card>
     );
}

export {CardDeuda};