export const formatDate = (
    raw: string | number,
    format: string = 'DD/MM/YYYY'
) => {
    const date = new Date(raw)
    return format
        .replace('DD', `${date.getDate()}`)
        .replace('MM', `${date.getMonth() + 1}`)
        .replace('YYYY', `${date.getFullYear()}`)
}
