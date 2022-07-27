import React from 'react'
import {MobileContainer} from '../containers/MobileContainer';

function MobilePages({pageIndex,setPageIndex}) {
    return (
    <>
        <MobileContainer
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
        />
    </>
    );
}

export {MobilePages};