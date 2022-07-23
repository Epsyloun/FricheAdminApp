import React from 'react';
import { Box, Card, CardActionArea, CardContent,Typography } from '@mui/material';

function InventarioCard({title, image}) {
    function showOptions(){
        console.log('click');
        console.log(image)
    }
    return (
        <>
           <Card className="orange-card" sx={{ display: 'flex',  alignItems:"center", background:`url(${image}) no-repeat`, objectFit:'cover' }}>
                <CardActionArea  onClick={showOptions} sx={{color:'pink',height:"200px", }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', width:'100%'}}>
                        <CardContent sx={{padding:'5%', flex: '1 1 auto'}}>
                            <Typography component="div" variant="h4" align='center' color="text.primary">
                                {title}
                            </Typography>
                        </CardContent>
                    </Box>
                </CardActionArea>
            </Card>
        </>
     );
}

export {InventarioCard};