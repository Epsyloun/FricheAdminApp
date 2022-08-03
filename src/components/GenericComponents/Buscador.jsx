import React from 'react'
import { Autocomplete, Grid, TextField} from '@mui/material';

function Buscador() {
    //Styled Components

    const StyledPaper = {
        borderRadius:'20px',
        marginTop:"0.5em",
        padding:'2%',
        backgroundColor:'background.default'
    }
    const OptionArray = ['Todo','Mayor a menor','Menor a mayor','Alfabetico','Ultima deuda']
    return (
            <Grid container spacing={1} sx={StyledPaper}>
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
     );
}

export {Buscador};