import React from 'react'
import { Autocomplete, Card, Grid, Paper, TextField} from '@mui/material';

function Buscador() {
    //Styled Components

    const StyledPaper = {
        borderRadius:'20px',
        marginTop:"0.5em",
        padding:'2%',
        marginBottom:'2%',
    }
    const OptionArray = ['Todo','Mayor a menor','Menor a mayor','Alfabetico','Ultima deuda']
    return (
        <Card sx={StyledPaper}>
            <Grid container spacing={1}>
                <Grid item xs={4}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-deudas"
                        options={OptionArray}
                        width="auto"
                        renderInput={(params) => <TextField {...params} label="Filtro" />}
                    />
                </Grid>
                <Grid item xs={8}>
                    <TextField fullWidth={true} id="outlined-basic" label="Nombre" variant="outlined" />
                </Grid>
            </Grid>
        </Card>
     );
}

export {Buscador};