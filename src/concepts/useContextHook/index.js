import { useState } from 'react';
import { Context } from './Context';
import { themes } from './theme';
import Page from './Page';

export default function App() {
    const [theme, setTheme] = useState('light');
    console.log({ theme });
    const themeValue = theme === 'light' ? themes.light : themes.dark;

    return (
        <Context.Provider value={{ theme: themeValue }}>
            <Page setTheme={setTheme} />
        </Context.Provider>
    );
}
