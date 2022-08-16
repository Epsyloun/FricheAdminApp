import React from 'react';
import { Grid } from '@mui/material';
import {CardDeuda} from './CardDeuda';
import {DeudasArray} from '../GenericComponents/infoExamples'

function ListDeuda() {
    const Deudas = DeudasArray()
    return (
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="flex-start">
            {Deudas.map((deudas) =>

                <Grid item xs={12} md={4} key={deudas.id}>
                    <CardDeuda
                        initial={deudas.inicial}
                        title={deudas.nombre +' '+ deudas.apellido}
                        info={deudas.monto}
                        subtitle={deudas.fecha}
                    />
                </Grid>
            )}

            </Grid>
     );
}

export {ListDeuda};