export const getLocalStorage = (key: string) => {
    return typeof window !== 'undefined'
        ? JSON.parse(window.localStorage.getItem(key)!)
        : null
}

export const setLocalStorage = (key: string, value: string) => {
    return (
        typeof window !== 'undefined' &&
        window.localStorage.setItem(key, JSON.stringify(value))
    )
}
