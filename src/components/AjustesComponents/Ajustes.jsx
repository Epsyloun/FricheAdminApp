import React from 'react';

import { Avatar, Button, Grid, IconButton, Paper, TextField } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import UpdateIcon from '@mui/icons-material/Update';

//Styled Components
    const StyledGrid = {
        borderRadius:"20px",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        animation: 'fade-in-down ease 0.5s'
    }
    const StyledItemGrid={
        marginTop:"1.5em",
        display:"flex",
        flexDirection:'column',
        justifyContent:"center",
        alignItems:"center"
    }
    const StyledTextfield = {
        marginTop:"10px",
        marginBottom:"10px"
    }
    const StyledImage={
        width: '10em',
        height: '10em'
    }

function Ajustes({oldNombre, oldApellido, oldCorreo}) {



    const [nombre, setNombre] = React.useState('Rodrigo');
    const [apellido, setApellido] = React.useState('Diaz');
    const [correo, setCorreo] = React.useState('rodrigo.diaz8b@gmail.com');
    const [buttonDisabled, setButtonDisabled] = React.useState(true);

    function handlerNombre (event){
        setNombre(event.target.value);
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
            setButtonDisabled(true)
        }else{
            setButtonDisabled(false)
        }
    }

    return (
        <Paper container sx={StyledGrid}>
            <Grid item xs={12} md={4} sx={StyledItemGrid}>
                <Avatar
                    alt="user image"
                    src="https://i.pinimg.com/736x/e7/0a/4c/e70a4c9a51ed64b04f71bbae16a9d91b.jpg"
                    sx={StyledImage}
                />
                <IconButton className='camera-button' color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" />
                            <PhotoCamera />
                </IconButton>
            </Grid>
            <Grid item xs={12} md={8}>
                    <TextField sx={StyledTextfield} fullWidth label="Nombre" variant="outlined" value={nombre} onChange={handlerNombre} onKeyUp={handlerChange}/>
                    <TextField sx={StyledTextfield} fullWidth label="Apellido" variant="outlined" value={apellido} onChange={handlerApellido} onKeyUp={handlerChange}/>
                    <TextField sx={StyledTextfield} fullWidth label="Correo" variant="outlined" value={correo} onChange={handlerCorreo} onKeyUp={handlerChange}/>
            </Grid>
            <Grid item xs={12} md={12} align="right" m={2}>
                <Button disabled={buttonDisabled} color="secondary" variant="contained" endIcon={<UpdateIcon />}>
                    Actualizar
                </Button>
            </Grid>
        </Paper>
    );
}

export {Ajustes};