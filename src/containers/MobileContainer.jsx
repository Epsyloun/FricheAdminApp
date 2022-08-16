import React, { useEffect, useState } from 'react'
import { Avatar, Divider, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material';

import { Title } from '../components/GenericComponents/Title';
import { ExtraNav } from '../components/MobileComponents/ExtraNav';
import { SocialMedia } from '../components/MobileComponents/SocialMedia';
import { Technologies } from '../components/MobileComponents/Technologies';
import { LoaderMobile } from '../components/GenericComponents/Skeletons';

function MobileContainer({pageIndex,setPageIndex}) {

    const [loader, setLoader] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    },[loader])

    return (
    <>

        <Title
            titleText="Ver mas"
        />
        {loader && <LoaderMobile/>}
        {!loader && <>
        <Grid container>
            <ExtraNav
                pageIndex={pageIndex}
                setPageIndex={setPageIndex}
            />
            <SocialMedia/>
            <Technologies/>
        </Grid>
        </>}

    </>
     );
}

export {MobileContainer};