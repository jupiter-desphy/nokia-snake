import React from 'react';
import MenuHeader from './MenuHeader';

export default function Settings(props) {
    // const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light');

    // const switchTheme = () => {
    //   const newTheme = theme === 'light' ? 'dark' : 'light';
    //   setTheme(newTheme);
    // }
    
    return (
        <div>
            <button>
                <MenuHeader optionName='Settings' />
            </button>
        </div>
    )
}
