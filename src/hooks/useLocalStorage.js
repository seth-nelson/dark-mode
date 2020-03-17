import { useState } from 'react';

export function useLocalStorage(key, initialValue);
    if (window.localStorage && window.localStorage.getItem(key)) {
        initialValue = JSON.parse(window.localStorage.getItem(key));
    }

const [value, storedValue] = useState(initialValue);

