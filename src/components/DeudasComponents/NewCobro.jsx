import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, {useState} from "react";
import {saveCobros} from '../../firebase/api'

function NewCobro({ open, setOpen, openEoD, setOpenEoD}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    bgcolor: "background.paper",
    color: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  let fecha = new Date();
  let diaf = fecha.getDate();
  let mes = fecha.getMonth();
  mes = mes + 1;
  let ano = fecha.getFullYear();


  function handleClose() {
    setOpen(false);
    setOpenEoD(false);
  }

  //Funcion para guardar un nuevo cobro
  const initialState = {
    nombre:'',
    apellido:'',
    correo:'',
    fecha:`${diaf}/${mes}/${ano}`,
    monto:''
  }

  const [addCobro, setAddCobro] = useState(initialState);

  const handleInputChange = (e) =>{
    const {name, value} = e.target;
    setAddCobro({...addCobro, [name]:value})
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await saveCobros(addCobro);
    console.log('new task added');
    setAddCobro(initialState)
  }

  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
        <form onSubmit={handleSubmit}>
          <Box sx={style}>
            <Typography align="center" variant="h3" component="h3">
              Nuevo cobro
            </Typography>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
              mt={2}
            >
              <Grid item md={8} xs={12}>
                <TextField
                  name="nombre"
                  onChange={handleInputChange}
                  required
                  fullWidth
                  id="outlined-required"
                  label="Nombre"
                  placeholder="Nombre del cliente"
                  value={addCobro.nombre}
                />
              </Grid>
              <Grid item md={8} xs={12}>
                <TextField
                  name="apellido"
                  onChange={handleInputChange}
                  required
                  fullWidth
                  id="outlined-required"
                  label="Apellido"
                  placeholder="Apellido del cliente"
                  value={addCobro.apellido}
                />
              </Grid>
              <Grid item md={8} xs={12}>
                <TextField
                  name="correo"
                  onChange={handleInputChange}
                  required
                  fullWidth
                  id="outlined-required"
                  label="Correo"
                  placeholder="Correo del cliente"
                  value={addCobro.correo}
                />
              </Grid>
              <Grid item md={8} xs={12}>
                <TextField
                  name="monto"
                  onChange={handleInputChange}
                  required
                  fullWidth
                  id="outlined-required"
                  label="Cobro"
                  type="number"
                  placeholder="0.00"
                  value={addCobro.monto}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">$</InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item align="center" md={8} xs={12}>
                <Button type="submit" variant="contained">Aceptar</Button>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Modal>
    </Grid>
  );
}

export { NewCobro };