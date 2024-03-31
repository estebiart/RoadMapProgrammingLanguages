export const setLocalStorage = (key: string, value: any) => {
    if (typeof value === 'string') {
        localStorage.setItem(key, value); // Si value ya es una cadena JSON, guárdala directamente
    } else {
        localStorage.setItem(key, JSON.stringify(value)); // De lo contrario, conviértela a una cadena JSON y luego guárdala
    }
};

export const getLocalStorage = (key: string) => {
    return localStorage.getItem(key);
};
