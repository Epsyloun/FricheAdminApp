import React from 'react';
import { Box, Card, CardActionArea, CardContent,Typography } from '@mui/material';



function InventarioCard({title, image}) {

    //Styled Components
    const StyledCard = {
        display: 'flex',
        alignItems:"center",
        background:`url(${image}) no-repeat`,
        objectFit:'cover'
    }
    const StyledCardActionArea = {color:'pink',height:"200px",}

    const StyledBox = {
        display: 'flex',
        flexDirection: 'column',
        width:'100%'
    }
    const StyledCardContent = {padding:'5%', flex: '1 1 auto'}

    //Handler Options
    function showOptions(){
        console.log('click');
        console.log(image)
    }
    return (
        <Card className="styled-card" sx={StyledCard}>
            <CardActionArea  onClick={showOptions} sx={StyledCardActionArea}>
                <Box sx={StyledBox}>
                    <CardContent sx={StyledCardContent}>
                        <Typography component="div" variant="h4" align='center' color="text.primary">
                            {title}
                        </Typography>
                    </CardContent>
                </Box>
            </CardActionArea>
        </Card>
     );
}

export {InventarioCard};