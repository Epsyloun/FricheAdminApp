import React from 'react';
import BarChartIcon from '@mui/icons-material/BarChart';//GRAFICO
import InventoryIcon from '@mui/icons-material/Inventory';//INVENTARIO
import WorkIcon from '@mui/icons-material/Work';//FINANZAS
import SettingsIcon from '@mui/icons-material/Settings';//AJUSTES
import { Avatar, Divider, Grid, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material';

//StyledComponents
    const StyledGrid = {
        backgroundColor:"background.paper",
        borderRadius:"20px",
        animation: 'fade-in-down ease 0.5s',
        display: 'flex',
        height:"100%",
        flexDirection:"column",
        animation: 'fade-in-down ease 0.5s',
    }
    const StyledList = {width:"100%"}
    const StyledText ={color:"text.accent"}
    const StyledBackGround = {backgroundColor:"text.accent"}

function ExtraNav({pageIndex,setPageIndex}) {
    //handler page index
    function handlerPageIndex(index){
        setPageIndex(index)
      }
    return (
        <Grid item p={2} xs={12} md={12} sx={StyledGrid}>
                <Typography color="text.secondary" variant="h5" align="center" ml="2%">
                    Mas direcciones
                </Typography>
                <Divider />
                <Stack  display="flex" flexDirection="row" justifyContent="space-around" mt="0.5em">
                <List component="nav" aria-label="mailbox folders" sx={StyledList}>
                    <ListItem button sx={StyledText} onClick={event => handlerPageIndex(5)}>
                        <ListItemAvatar>
                            <Avatar sx={StyledBackGround}>
                                <BarChartIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={StyledText} primary="Estadistica" />
                    </ListItem>
                    <Divider sx={StyledBackGround}/>
                    <ListItem button sx={StyledText} onClick={event => handlerPageIndex(4)}>
                        <ListItemAvatar>
                            <Avatar sx={StyledBackGround}>
                                <WorkIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={StyledText} primary="Finanzas" />
                    </ListItem>
                    <Divider sx={StyledBackGround}/>
                    <ListItem button sx={StyledText} onClick={event => handlerPageIndex(3)}>
                        <ListItemAvatar>
                            <Avatar sx={StyledBackGround}>
                                <InventoryIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={StyledText} primary="Inventario" />
                    </ListItem>
                    <Divider sx={StyledBackGround}/>
                    <ListItem button sx={StyledText} onClick={event => handlerPageIndex(6)}>
                        <ListItemAvatar>
                            <Avatar sx={StyledBackGround}>
                                <SettingsIcon/>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText sx={StyledText} primary="Ajustes" />
                    </ListItem>
                    </List>
                </Stack>
            </Grid>
     );
}

export {ExtraNav};