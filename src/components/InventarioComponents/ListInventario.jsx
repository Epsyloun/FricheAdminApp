import React from 'react';
import { Grid } from '@mui/material';
import { InventarioCard } from './InventarioCard';

function ListInventario() {
    return (
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="flex-start">
            <Grid item xs={12} md={6}>
                <InventarioCard
                    image={'https://i.pinimg.com/736x/e7/0a/4c/e70a4c9a51ed64b04f71bbae16a9d91b.jpg'}
                    title={'Salado'}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <InventarioCard
                    image={''}
                    title={'Dulce'}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <InventarioCard
                    image={''}
                    title={'Picante'}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <InventarioCard
                    image={''}
                    title={'Cantidad'}
                />
            </Grid>
        </Grid>
     );
}

export {ListInventario};