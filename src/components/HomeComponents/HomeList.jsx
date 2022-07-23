import React from 'react'
 import { Grid } from '@mui/material';
import { HorizontalCard } from '../GenericComponents/HorizontalCard';
import { VerticalCard } from '../GenericComponents/VerticalCard';

 function HomeList() {
    return (
        <Grid container spacing={2} display="flex" alignItems="stretch" mt={0}>
            <Grid item xs={12} md={4} display="flex" flexDirection="column" justifyContent="space-between">
                    <HorizontalCard
                        image={'attach_money'}
                        title={'Producto mas vendido'}
                        info={'Mani japones'}
                        subtitle={'42% de las ventas'}
                    />
                    <br/>
                    <HorizontalCard
                        image={'trending_up'}
                        title={'Categoria mas vendida'}
                        info={'Salados'}
                        subtitle={'62% de las ventas'}
                    />
            </Grid>
            <Grid item xs={6} md={4}>
                <VerticalCard
                    image={'attach_money'}
                    title={'Producto mas vendido'}
                    info={'Mani japones'}
                    subtitle={'Ultima semana'}
                />
            </Grid>
            <Grid item xs={6} md={4} >
                <VerticalCard
                    image={'attach_money'}
                    title={'Producto mas vendido'}
                    info={'Mani japones'}
                    subtitle={'Ultima semana'}
                />
            </Grid>
            <Grid item xs={12} md={12}>
                <VerticalCard
                    image={'attach_money'}
                    title={'Producto mas vendido'}
                    info={'Mani japones'}
                    subtitle={'Ultima semana'}
                />
            </Grid>
        </Grid>
     );
 }

 export {HomeList};