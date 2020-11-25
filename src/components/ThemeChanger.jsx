import React, { useState, useEffect } from 'react';

export default function ThemeMode() {
    const [themeState, setThemeState] = useState(false);

    useEffect(() => {
        const getTheme = localStorage.getItem('Theme');
        if (getTheme === 'dark') {
            setThemeState(true);
        }
    }, []);

    useEffect(() => {
        if (themeState) {
            localStorage.setItem('Theme', 'dark');
            document.body.classList.add('dark-mode');
        } else {
            localStorage.setItem('Theme', 'light');
            document.body.classList.remove('dark-mode');
        }
    }, [themeState]);

    return (
        <div>
            <button onClick={() => setThemeState(!themeState)}>{themeState ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
    );
}
