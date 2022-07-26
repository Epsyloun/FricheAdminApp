import React from 'react';
import '../ComponentsStyles.css';

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
import {Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import {UserInfoNav} from './UserInfoNav';



  //Appbar function
  function AppBarNav({pageIndex,setPageIndex}) {
        //handler page index
        function handlerPageIndex(index){
          setPageIndex(index)
        }
        //AppBar config
          const drawerWidth = 240;
          return (
            <Drawer
            className='side-nav'
                sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    animation: 'fadeInLeft ease 1s'
                  }
                }}
                variant="permanent"
                anchor="left"
              >
                <UserInfoNav />
                <Divider />
                <List>
                  {['Inicio', 'Cobros','Pedidos','Inventario','Finanzas','Estadisticas','Ajustes'].map((text, index) => (
                    <ListItem key={text} disablePadding sx={{color:"hotpink"}}>
                      <ListItemButton
                      onClick={event => handlerPageIndex(index)}
                      >
                        <ListItemIcon sx={{color:"hotpink"}}>
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

                <Stack marginTop="auto" direction="row" justifyContent="space-evenly" spacing={2}>

                    <IconButton href="https://github.com/Epsyloun" target="_blank">
                        <GitHubIcon sx={{color:'hotpink'}}/>
                    </IconButton>
                    <IconButton href="https://www.instagram.com/frichesv/" target="_blank">
                        <InstagramIcon sx={{color:'hotpink'}}/>
                    </IconButton>
                </Stack>
          </Drawer>
            );
}

export {AppBarNav};