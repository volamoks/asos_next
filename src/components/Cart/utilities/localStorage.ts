export const setToLocalStorage = (key: string, arr: any[] | any) => {
    if (arr.length) localStorage.setItem(key, JSON.stringify(arr.map(item => item)));
};
export const getLocatStorage = (key: string) => {
    const data = typeof localStorage !== 'undefined' ? localStorage.getItem(key) : null;
    return data ? JSON.parse(data) : null;
};
