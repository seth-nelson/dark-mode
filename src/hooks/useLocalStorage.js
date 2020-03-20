import { useState } from 'react';

export function useLocalStorage(key, initialValue) {

    const [storedValue, setStoredValue] = useState(() => {
        if (window.localStorage && window.localStorage.getItem(key)) {
            initialValue = JSON.parse(window.localStorage.getItem(key));
        }
    })
}

