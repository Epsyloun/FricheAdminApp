import React from 'react';
import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';
import { Box } from '@mui/system';

//Styled Components
    const VioletButton = {
        marginTop: '1em',
        backgroundColor: 'hotpink',
        color: '#fff',
        "&:focus": {
        backgroundColor: 'hotpink '
        },
        "&:hover": {
        backgroundColor: 'DarkViolet'
        }
    };

    const StyledCard = {
        display: 'flex',
        wrap:"wrap",
        height:"100%"
     }

    const StyledBox = {
        display: 'flex',
        flexDirection: 'column',
        width:'100%',
        alignItems:"center",
        justifyContent: 'space-evenly'
    }
    const StyledCardContent ={width:"70%"}

    const StyledInput = {marginTop:"0.5em",textAlign:"center"}

function FinanazasOptions() {
    return (
        <Card className="styled-card" sx={StyledCard}>
            <Box sx={StyledBox}>
                <CardContent sx={StyledCardContent}>
                <Typography color="hotpink" variant="h4" align="center" ml="2%">
                    Dinero en caja
                </Typography>
                <TextField
                    fullWidth
                    value="35.00"
                    id="box-money-day"
                    type="number"
                    required
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={StyledInput}
                />
                <Stack alignItems="flex-end">
                    <Button sx={VioletButton} variant="contained" startIcon={<PaidIcon/>}>
                        Actualizar
                    </Button>
                </Stack>
                </CardContent>
            </Box>
        </Card>
     );
}

export {FinanazasOptions};