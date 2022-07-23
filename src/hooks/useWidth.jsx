import React from 'react'

function useWidth() {
    const [width, setWidth] = React.useState(window.innerWidth);

    window.onresize = () =>{setWidth(window.innerWidth)}
    return ( width );
  }

  export {useWidth};