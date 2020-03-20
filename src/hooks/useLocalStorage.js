import { useState } from 'react';

export function useLocalStorage(key, initialValue) { //set up function for useLocalStorage with key and initialValue as parameters

    const [storedValue, setStoredValue] = useState(() => { //set state values as a function
        if (window.localStorage && window.localStorage.getItem(key)) { //check for an existing key for existing data (remember data)
            initialValue = JSON.parse(window.localStorage.getItem(key)); //don't forget to parse JSON data!
        }
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
}

