import React ,{useState,useEffect} from 'react';

const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
    const mqListener = (e => {
        setIsDarkTheme(e.matches);
    });

    useEffect(() => {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addListener(mqListener);
      return () => darkThemeMq.removeListener(mqListener);
    }, []);
    return isDarkTheme;
}

function useTheme() {

    const isDarkTheme = useThemeDetector();
    const [themeColor, setThemeColor] = useState(isDarkTheme ? "dark": "light");
    console.log(themeColor);
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