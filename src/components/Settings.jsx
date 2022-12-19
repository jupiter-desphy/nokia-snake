import React, { useContext } from 'react';
import MenuHeader from './MenuHeader';
import { ThemeContext } from '../App';
import { useTheme, useThemeUpdate } from './ThemeContext';
import LiteSlide from './LiteSlide';
import MenuSlide from './MenuOption';

export default function Settings(props) {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate()
    const themeStyles = {
        backgroundColor: darkTheme ? 'rgb(168, 192, 174)' : 'rgb(126, 189, 141)'
    }
    // const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

    // const switchTheme = () => {
    //   const newTheme = theme === 'light' ? 'dark' : 'light';
    //   setTheme(newTheme);
    // }

    return (
        <div style={themeStyles}>
            <LiteSlide optionName='Settings' isHeading={true} />
            <br></br>
            <button className='hidden-button' onClick={toggleTheme}>
                <MenuSlide optionName=' Coming soon' />
            </button>
        </div>
    )
}
