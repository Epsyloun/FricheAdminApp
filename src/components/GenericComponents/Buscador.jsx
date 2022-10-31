import React from 'react'
import { Autocomplete, Button, Grid, TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function Buscador() {
    //Styled Components

    const StyledPaper = {
        borderRadius:'20px',
        marginBottom:'1.5em',
        backgroundColor:'background.default'
    }
    const OptionArray = ['Todo','Mayor a menor','Menor a mayor','Alfabetico','Ultima deuda']
    return (
            <Grid container spacing={1} sx={StyledPaper}>
                <Grid item md={4} xs={12}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-deudas"
                        options={OptionArray}
                        width="auto"
                        renderInput={(params) => <TextField {...params} label="Filtro" />}
                    />
                </Grid>
                <Grid item md={6} xs={8}>
                    <TextField fullWidth={true} id="outlined-basic" label="Nombre" variant="outlined" />
                </Grid>
                <Grid item md={2} xs={4}>
                    <Button startIcon={<AddIcon />} sx={{height:'100%'}} fullWidth={true} variant="outlined">Nuevo</Button>
                </Grid>
            </Grid>
    );
}

export {Buscador};