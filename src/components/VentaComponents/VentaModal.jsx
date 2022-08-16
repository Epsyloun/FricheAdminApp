import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import SavingsOutlinedIcon from '@mui/icons-material/SavingsOutlined';
import SavingsIcon from '@mui/icons-material/Savings';
import CheckIcon from '@mui/icons-material/Check';
import { Autocomplete, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from '@mui/material';
import {DeudasArray} from '../GenericComponents/infoExamples'

function VentaModal({open, setOpen}) {
//Datos de Deudas
    const dataDeudas = DeudasArray()

//StyledComponents
    const CheckboxStyled={
        color: 'secondary.main',
        display:'flex',
        justifyContent:'center',
        '&.Mui-checked': {
        color: 'secondary.main',
        },
        '& .MuiSvgIcon-root': { fontSize: 40 }
    ,}

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    backgroundColor: 'background.paper',
    borderRadius:"20px",
    boxShadow: 24,
    p: 4,
  };
  const StyledPaper = {
    display:"flex",
    justifyContent:"center"
    }
    const OptionArray = []
    for (let i = 0; i < dataDeudas.length; i++) {
        OptionArray.push(dataDeudas[i].nombre)
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
            <Fade in={open}>
                <Box sx={style}>
                    <form>
                        <Typography mb='1em' color="text.primary" variant="h4" align="center">
                            Nueva venta
                        </Typography>
                        <Grid mb='1em' container spacing={1} sx={StyledPaper}>
                            <Grid item xs={12} md={8}>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-deudas"
                                    options={OptionArray}
                                    width="auto"
                                    renderInput={(params) => <TextField {...params} label="Nombre" />}
                                />
                            </Grid>
                            <Grid mb='1em' item xs={6} md={4}>
                                <TextField fullWidth label="Monto a pagar" />
                            </Grid>
                            <Grid item xs={12} md={12}>
                            <FormControlLabel
                                value="start"
                                sx={CheckboxStyled}
                                control={<Checkbox
                                    icon={<SavingsOutlinedIcon />}
                                    checkedIcon={<SavingsIcon />}

                                    />
                                }
                                label="Añadir a deudas"
                                labelPlacement="start"
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={12} sx={StyledPaper}>
                            <Button color='secondary' onClick={handleClose} variant="contained" endIcon={<CheckIcon />}>Finalizar</Button>
                        </Grid>
                    </form>
                </Box>
            </Fade>
        </Modal>
     );
}

export {VentaModal};