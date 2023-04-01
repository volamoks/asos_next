export const getLocatStorage = (key: string) => {
    const data = typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
    return data ? JSON.parse(data) : null;
};

export const setToLocalStorage = <T>(key: string, data: T) => {
    if (data instanceof Array) {
        localStorage.getItem(key) === JSON.stringify(data.map(item => item))
            ? localStorage.removeItem(key)
            : localStorage.setItem(key, JSON.stringify(data.map(item => item)));
    } else {
        localStorage.getItem(key)
            ? localStorage.removeItem(key)
            : localStorage.setItem(key, JSON.stringify(data));
    }
};
