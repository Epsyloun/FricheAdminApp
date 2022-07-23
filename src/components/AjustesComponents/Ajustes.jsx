import React from 'react';
import { Avatar, Button, Divider, Grid, IconButton, TextField, Typography } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import UpdateIcon from '@mui/icons-material/Update';

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

function Ajustes({oldNombre, oldApellido, oldCorreo}) {

    const [nombre, setNombre] = React.useState('Rodrigo');
    const [apellido, setApellido] = React.useState('Diaz');
    const [correo, setCorreo] = React.useState('rodrigo.diaz8b@gmail.com');
    const [buttonDisabled, setButtonDisabled] = React.useState(false);

    //TODO CREAR pantalla de Login

    function handlerNombre (event){
        setNombre(event.target.value);
    console.log(buttonDisabled);
    }
    function handlerApellido (event){
        setApellido(event.target.value);
    }
    function handlerCorreo (event){
        setCorreo(event.target.value);
    }
    function handlerChange(event){
        if(oldNombre === nombre.trim() && oldApellido === apellido.trim() && oldCorreo === correo.trim())
        {
            setButtonDisabled(false)
        }else{
            setButtonDisabled(true)
        }
    }

    return (

            <form className="orange-table">
            <Grid p={2} container sx={{background:"white", borderRadius:"20px", display:"flex", justifyContent:"center",alignItems:"center" }}>
                <Grid p={2} item xs={12} md={4} sx={{display:"flex", flexDirection:'column', justifyContent:"center", alignItems:"center" }}>
                    <Typography variant="h4" color="black" mb="0.2em">
                        Imagen
                    </Typography>
                    <Avatar
                        alt="user image"
                        src="https://i.pinimg.com/736x/e7/0a/4c/e70a4c9a51ed64b04f71bbae16a9d91b.jpg"
                        sx={{ width: '10em', height: '10em'}}
                    />
                    <IconButton className='camera-button' color="primary" aria-label="upload picture" component="label">
                                <input hidden accept="image/*" type="file" />
                                <PhotoCamera />
                    </IconButton>
                </Grid>
                <Divider sx={{marginRight:"2em"}} orientation="vertical" flexItem />

                <Grid item xs={12} md={7}>
                        <TextField sx={{marginTop:"10px",marginBottom:"10px"}} fullWidth={true} label="Nombre" variant="outlined" value={nombre} onChange={handlerNombre} onKeyUp={handlerChange}/>
                        <TextField sx={{marginTop:"10px",marginBottom:"10px"}} fullWidth={true} label="Apellido" variant="outlined" value={apellido} onChange={handlerApellido} onKeyUp={handlerChange}/>
                        <TextField sx={{marginTop:"10px",marginBottom:"10px"}} fullWidth={true} label="Correo" variant="outlined" value={correo} onChange={handlerCorreo} onKeyUp={handlerChange}/>
                </Grid>
                <Button disabled={!buttonDisabled} sx={VioletButton} variant="contained" endIcon={<UpdateIcon />}>
                    Actualizar
                </Button>
            </Grid>
            </form>
    );
}

export default Ajustes;