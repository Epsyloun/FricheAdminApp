import React, { useEffect } from 'react';
import { makeStyles } from "@mui/styles";

//New icons
import HomeIcon from '@mui/icons-material/Home';//INICIO
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';//DEUDAS
import BorderColorIcon from '@mui/icons-material/BorderColor';//PEDIDOS
import InventoryIcon from '@mui/icons-material/Inventory';//INVENTARIO
import WorkIcon from '@mui/icons-material/Work';//FINANZAS
import BarChartIcon from '@mui/icons-material/BarChart';//GRAFICO
import SettingsIcon from '@mui/icons-material/Settings';//AJUSTES

import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';
import {UserInfoNav} from './UserInfoNav';
import { useThemeHook } from '../../hooks/useTheme';


  //AppBar config
  const drawerWidth = 240;

  //StyledComponents
  const StyledDrawer = {
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: drawerWidth,
      boxSizing: 'border-box',
      animation: 'fadeInLeft ease 1s'
    },

  }
  const StyledText = {color:"text.accent"}

  //Appbar function
  function AppBarNav({pageIndex,setPageIndex}) {

    const theme = useThemeHook();

    const useStyles = makeStyles({
      paper: {
        backgroundColor: theme.palette.background.default + '!important'
      }
    });

    const classes = useStyles();

    //handler page index
    function handlerPageIndex(index){
      setPageIndex(index)
    }

    return (
      <Drawer
          classes={{ paper: classes.paper }}
          sx={StyledDrawer}
          variant="permanent"
          anchor="left"
        >
        <UserInfoNav />
        <Divider />
        <List >
          {['Inicio', 'Cobros','Pedidos','Inventario','Finanzas','Estadisticas','Ajustes'].map((text, index) => (
            <ListItem key={text} disablePadding sx={StyledText}>
              <ListItemButton
              onClick={event => handlerPageIndex(index)}
              >
                <ListItemIcon sx={StyledText}>
                  {index === 0 &&  <HomeIcon/>}
                  {index === 1 &&  <AttachMoneyIcon/>}
                  {index === 2 &&  <BorderColorIcon/>}
                  {index === 3 &&  <InventoryIcon/>}
                  {index === 4 &&  <WorkIcon/>}
                  {index === 5 &&  <BarChartIcon/>}
                  {index === 6 &&  <SettingsIcon/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
          <Stack marginTop="auto" direction="row" justifyContent="space-evenly" spacing={2} >
            <IconButton href="https://github.com/Epsyloun" target="_blank">
              <GitHubIcon color="secondary"/>
            </IconButton>
            <IconButton href="https://www.instagram.com/frichesv/" target="_blank">
              <InstagramIcon color="secondary"/>
            </IconButton>
          </Stack>
      </Drawer>
    );
}

export {AppBarNav};