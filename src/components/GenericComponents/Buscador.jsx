import React from 'react'
import { Autocomplete, Grid, TextField} from '@mui/material';

function Buscador() {
    //Styled Components
    const StyledContainer={
        borderRadius:'20px',
        marginTop:"0.5em",
        backgroundColor: 'white',
        padding:'2%',
        marginBottom:'2%',
      }
    const OptionArray = ['Todo','Mayor a menor','Menor a mayor','Alfabetico','Ultima deuda']
    return (
        <Grid container className="styled-card" sx={StyledContainer} spacing={1}>
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