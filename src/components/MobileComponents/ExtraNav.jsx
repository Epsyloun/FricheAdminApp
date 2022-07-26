import React from 'react';
import BarChartIcon from '@mui/icons-material/BarChart';//GRAFICO
import InventoryIcon from '@mui/icons-material/Inventory';//INVENTARIO
import WorkIcon from '@mui/icons-material/Work';//FINANZAS
import SettingsIcon from '@mui/icons-material/Settings';//AJUSTES
import { Avatar, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material';

function ExtraNav({pageIndex,setPageIndex}) {
    //handler page index
    function handlerPageIndex(index){
        setPageIndex(index)
      }
    return (
        <Grid item p={2} xs={12} md={12} sx={{background:"white", borderRadius:"20px", animation: 'fade-in ease 1s'}}>
                <Typography variant="h5" align="center" ml="2%">
                    Mas direcciones
                </Typography>
                <Divider/>
                <Stack  display="flex" flexDirection="row" justifyContent="space-around" mt="0.5em">
                <List component="nav" aria-label="mailbox folders" sx={{width:"100%"}}>
                    <ListItem button sx={{color:"pink"}} onClick={event => handlerPageIndex(5)}>
                        <ListItemAvatar>
                            <Avatar sx={{backgroundColor:"hotpink"}}>
                                <BarChartIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{color:'hotpink'}} primary="Estadistica" />
                    </ListItem>
                    <Divider sx={{backgroundColor:"pink"}}/>
                    <ListItem button sx={{color:"pink"}} onClick={event => handlerPageIndex(4)}>
                        <ListItemAvatar>
                            <Avatar sx={{backgroundColor:"hotpink"}}>
                                <WorkIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{color:"hotpink"}} primary="Finanzas" />
                    </ListItem>
                    <Divider sx={{backgroundColor:"pink"}}/>
                    <ListItem button sx={{color:"pink"}} onClick={event => handlerPageIndex(3)}>
                        <ListItemAvatar>
                            <Avatar sx={{backgroundColor:"hotpink"}}>
                                <InventoryIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{color:"hotpink"}} primary="Inventario" />
                    </ListItem>
                    <Divider sx={{backgroundColor:"pink"}}/>
                    <ListItem button sx={{color:"pink"}} onClick={event => handlerPageIndex(6)}>
                        <ListItemAvatar>
                            <Avatar sx={{backgroundColor:"hotpink"}}>
                                <SettingsIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={{color:"hotpink"}} primary="Ajustes" />
                    </ListItem>
                    </List>
                </Stack>
            </Grid>
     );
}

export {ExtraNav};