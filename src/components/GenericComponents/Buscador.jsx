import React from 'react'
import { Autocomplete, Grid, TextField} from '@mui/material';

function Buscador() {
    const StyledContainer={
        borderRadius:'20px',
        backgroundColor: 'white',
        padding:'2%',
        marginBottom:'2%',
      }
    return (
        <Grid container sx={StyledContainer} spacing={1} mt="0.5em">
                <Grid item xs={8}>
                    <TextField fullWidth={true} id="outlined-basic" label="Nombre" variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                    <Autocomplete
                        disablePortal
                        id="combo-box-deudas"
                        options={['Todo','Mayor a menor','Menor a mayor','Alfabetico','Ultima deuda']}
                        sx={{ width:  'auto' }}
                        renderInput={(params) => <TextField {...params} label="Filtro" />}
                    />
                </Grid>
        </Grid>
     );
}

export {Buscador};