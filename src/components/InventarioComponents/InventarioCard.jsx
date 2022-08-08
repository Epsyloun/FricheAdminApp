import React from 'react';
import { Box, Button, Card, CardActions, CardContent,CardMedia,TextField,Typography } from '@mui/material';

//Styled Components
const StyledCard = {
    display: 'flex',
    flexDirection:"column",
    alignItems:"center",
    justifyContent:'center',
    borderRadius: '20px',
}

const StyledBox = {
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    width:'100%',
}
const StyledCardContent = {padding:'5%', flex: '1 1 auto'}

const StyledInput = {
    textAlign:'center'
}


function InventarioCard({title, cantidad, precio, img}) {


    //Handler Options
    function showOptions(){
        console.log('click');
    }
    return (
        <Card className="styled-card" sx={StyledCard}>
            <Box sx={StyledBox}>
                <Typography m="0.3em" component='div' variant="h4" align='center' color="text.primary">
                    {title}
                </Typography>
                <CardMedia
                    component="img"
                    height="180"
                    image={img}
                    alt="mani"
                />
                    <CardContent sx={StyledCardContent}>
                        <Typography component='div' variant="h6" align='center' color="text.primary">
                            Cantidad:
                        </Typography>
                        <TextField
                            inputProps={{style: StyledInput}}
                            fullWidth
                            hiddenLabel
                            defaultValue={cantidad}
                            variant="filled"
                            size="small"
                        />
                        <Typography component='div' variant="h6" align='center' color="text.primary">
                            Precio:
                        </Typography>
                        <TextField
                            inputProps={{style: StyledInput}}
                            fullWidth
                            hiddenLabel
                            defaultValue={precio}
                            variant="filled"
                            size="small"
                        />
                    </CardContent>
                <CardActions>
                    <Button variant='outlined' size="medium">Actualizar</Button>
                </CardActions>
            </Box>
        </Card>
     );
}

export {InventarioCard};