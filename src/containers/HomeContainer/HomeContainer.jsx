import React from 'react';
import { Container } from '@mui/system';
import {HeaderText} from '../../components/HomeComponents/Header'
import {HomeGraphicsList} from '../../containers/HomeContainer/HomeGraphics';

function HomeContainer() {
    return (
      <div className="content-container">
        <HeaderText/>
        <HomeGraphicsList/>
      </div>
    );
}

  export {HomeContainer};