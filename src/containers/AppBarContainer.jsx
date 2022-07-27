import React from 'react';
import {MobileBar} from '../components/AppBarComponents/MobileBar';
import {useWidth} from '../hooks/useWidth';
import { AppBarNav } from '../components/AppBarComponents/AppBar';

function AppBarContainer({pageIndex,setPageIndex}) {

    if(useWidth() >=1300)
    {
        return(
            <AppBarNav
                pageIndex={pageIndex}
                setPageIndex={setPageIndex}
            />
        );
    }else {
        return (
            <MobileBar
                pageIndex={pageIndex}
                setPageIndex={setPageIndex}
            />
        );
  }
}

export {AppBarContainer};