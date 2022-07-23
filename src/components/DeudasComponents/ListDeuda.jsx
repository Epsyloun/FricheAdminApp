import React from 'react';
import { Grid } from '@mui/material';
import {CardDeuda} from './CardDeuda';

function ListDeuda() {
    return (
        <Grid container spacing={2} direction="row" justifyContent="center" alignItems="flex-start">
                <Grid item xs={12} md={4}>
                    <CardDeuda
                        initial={'R'}
                        title={'Rodrigo Diaz'}
                        info={'5.55'}
                        subtitle={'22/06/22'}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <CardDeuda
                        initial={'R'}
                        title={'Rodrigo Diaz'}
                        info={'5.55'}
                        subtitle={'22/06/22'}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <CardDeuda
                        initial={'R'}
                        title={'Rodrigo Diaz'}
                        info={'5.55'}
                        subtitle={'22/06/22'}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <CardDeuda
                        initial={'R'}
                        title={'Rodrigo Diaz'}
                        info={'5.55'}
                        subtitle={'22/06/22'}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <CardDeuda
                        initial={'R'}
                        title={'Rodrigo Diaz'}
                        info={'5.55'}
                        subtitle={'22/06/22'}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <CardDeuda
                        initial={'R'}
                        title={'Rodrigo Diaz'}
                        info={'5.55'}
                        subtitle={'22/06/22'}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <CardDeuda
                        initial={'R'}
                        title={'Rodrigo Diaz'}
                        info={'5.55'}
                        subtitle={'22/06/22'}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <CardDeuda
                        initial={'R'}
                        title={'Rodrigo Diaz'}
                        info={'5.55'}
                        subtitle={'22/06/22'}
                    />
                </Grid>
            </Grid>
     );
}

export {ListDeuda};