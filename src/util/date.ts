const formatter = new Intl.DateTimeFormat('au', { dateStyle: 'medium' })

export const formatDate = (date: string | number) => {
    return formatter.format(new Date(date))
}
