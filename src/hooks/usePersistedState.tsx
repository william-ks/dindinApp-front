import { useEffect, useState } from "react";

export default function usePersistedState(key: string, InitialState: any) {
  const [state, setState] = useState<any>(() => {
    const storageValue = localStorage.getItem(key);

    if (storageValue) {
      return JSON.parse(storageValue);
    } else {
      return InitialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
