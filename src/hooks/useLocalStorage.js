import { useState, useCallback } from 'react';

import { getItem, saveItem } from '../helpers/localStorage';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoreValue] = useState(() => {
    // console.log('USE LOCAL STORAGE');
    try {
      const value = getItem(key);
      return value ? value : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = useCallback(
    newValue => {
      try {
        const valueToSet =
          newValue instanceof Function ? newValue(storedValue) : newValue;

        setStoreValue(valueToSet);
        saveItem(key, valueToSet);
      } catch (error) {}
    },
    [key, storedValue]
  );

  return [storedValue, setValue];
};

/**
 *
 * [value, setValue] = useLocalStorage(key, value)
 */
