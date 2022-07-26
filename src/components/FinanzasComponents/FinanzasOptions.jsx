import React from 'react';
import { Button, Card, CardContent, Grid, Stack, TextField, Typography } from '@mui/material';
import PaidIcon from '@mui/icons-material/Paid';
import { Box } from '@mui/system';

const VioletButton = {
    marginTop: '1em',
    backgroundColor: 'blueviolet',
    color: '#fff',
    "&:focus": {
      backgroundColor: 'blueViolet '
    },
    "&:hover": {
      backgroundColor: 'DarkViolet'
    }
  };

function FinanazasOptions() {
    return (
        <Card className="orange-card" sx={{ display: 'flex', wrap:"wrap", height:"100%" }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width:'100%', alignItems:"center", justifyContent: 'space-evenly',}}>
                <CardContent sx={{width:"70%"}}>
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
                    sx={{marginTop:"0.5em",textAlign:"center"}}
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