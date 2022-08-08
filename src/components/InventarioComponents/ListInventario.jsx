import React from 'react'
import {SaladosArray, DulcesArray, PicantesArray} from './InventarioArray.js'
import {TabsInventario} from './Tabs'
import { Grid, Typography } from '@mui/material';
import {InventarioCard} from './InventarioCard'
import Tabs from '@mui/material/Tabs';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tab from '@mui/material/Tab';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component='div'>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }

function ListInventario() {

    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleChangeIndex = (index) => {
      setValue(index);
    };

    const arraySalados = SaladosArray()
    const arrayDulces = DulcesArray()
    const arrayPicantes = PicantesArray()
    return (
        <Box sx={{ bgcolor: 'background.paper', width: 'auto' }}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Salados" {...a11yProps(0)} />
              <Tab label="Dulces" {...a11yProps(1)} />
              <Tab label="Picantes" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
                <TabsInventario
                    data={arraySalados}
                />
            </TabPanel>

            <TabPanel value={value} index={1} dir={theme.direction}>
                <TabsInventario
                    data={arrayDulces}
                />
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
                <TabsInventario
                    data={arrayPicantes}
                />
            </TabPanel>
          </SwipeableViews>
        </Box>
     );
}

export {ListInventario};