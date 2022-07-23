import React from 'react'
import { Button, Grid, IconButton, Stack, Typography } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';//GRAFICO
import InventoryIcon from '@mui/icons-material/Inventory';//INVENTARIO
import { useNavigate } from 'react-router-dom';
import Ajustes from '../../components/AjustesComponents/Ajustes';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const addButtonSyled = {
    width:"fit-content",
    borderRadius:"20px",
    color:"hotpink",
    borderColor:"hotpink",
    "&:focus": {
        borderColor:"hotpink",
    },
    "&:hover": {
    borderColor:"hotpink",
    }
}

function MobileContainer() {

    //Menu handler
    const [pageIndex, setPageIndex] = React.useState(7);
    let navigate = useNavigate();
    React.useEffect(()=>{
            if(pageIndex === 0){
                navigate("/")
            }else if(pageIndex === 1){
                navigate("/deudas")
            }else if(pageIndex === 2){
                navigate("/pedidos")
            }else if(pageIndex === 3){
                navigate("/inventario")
            }else if(pageIndex === 4){
                navigate("/finanzas")
            }else if(pageIndex === 5){
                navigate("/graficos")
            }else if(pageIndex === 6){
                navigate("/ajustes")
            }else if(pageIndex === 7){
                navigate("/mobilePages")
            }

    },[pageIndex])

    return (
    <>
        <Grid container>
            <Grid item xs={12}>
                <Typography variant="h4" className='title-section' align="center">
                    Configuracion
                </Typography>
            </Grid>
            <Grid item xs={12} md={12}>
                <Stack  display="flex" flexDirection="row" justifyContent="space-around" mt="0.5em" >
                    <Button sx={addButtonSyled} startIcon={<BarChartIcon />} variant="outlined" onClick={event => setPageIndex(5)}>Graficos</Button>
                    <Button sx={addButtonSyled} startIcon={<InventoryIcon />} variant="outlined" onClick={event => setPageIndex(4)}>Inventario</Button>
                </Stack>
            </Grid>
            <Stack mt="0.8em">
                <Ajustes/>
            </Stack>
            <Stack mt="0.5em" width="100%" display="flex" direction="row" justifyContent="space-evenly" spacing={2}>
                <IconButton href="https://github.com/Epsyloun" target="_blank">
                    <GitHubIcon sx={{color:'hotpink'}}/>
                </IconButton>
                <IconButton href="https://www.instagram.com/frichesv/" target="_blank">
                    <InstagramIcon sx={{color:'hotpink'}}/>
                </IconButton>
            </Stack>
        </Grid>
    </>
     );
}

export default MobileContainer;