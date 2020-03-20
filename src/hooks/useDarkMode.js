import { useState } from 'react';

export function useDarkMode(initialValues) {
    const[darkMode, setDarkMode] = useState('darkMode', initialValues);

    const toggleDarkMode = event => {
        event.preventDefault();
        return darkMode ? setDarkMode(false) : setDarkMode(true);
    }

    useEffect(() => {
        if(darkMode) {
            document.body.classList.add('dark-mode')
        } else {
            document.body.classList.remove('dark-mode')
        }
    }, [darkMode]);

    return [darkMode, setDarkMode, toggleDarkMode]
}