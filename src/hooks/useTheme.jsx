import React from 'react';

const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = React.useState(getCurrentTheme());
    const mqListener = (e => {
        setIsDarkTheme(e.matches);
    });

    React.useEffect(() => {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq(mqListener);
      return () => darkThemeMq(mqListener);
    }, []);
    return isDarkTheme;
}

const themeColor = (useThemeDetector ? "dark":"light");

function useTheme() {

    const theme = {
        palette:{
                mode:themeColor,
                ...(themeColor === "light" ? {
                    primary:{
                        main:'#FF8FB1',
                    },
                    secondary:{
                        main:"#7A4495"
                    }
                }:{
                    primary:{
                        main:'#FCE2DB',
                    },
                    secondary:{
                        main:"#B270A2",
                        headTable:'#B270A2'
                    },
                    text:{
                        accent:'hotpink',
                        avatar:'#b74d62'
                    },
                    background:{
                        paper:'#270c35',
                        default:'#1e1e1e',
                        container:'#1e1e1e'
                    },
                    shadow:{
                        main:'rgba(255, 99, 132,0.6)'
                    }
                })
            },
    }

    return theme;
}

export {useTheme};