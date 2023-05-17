const formatter = new Intl.DateTimeFormat('en-US')

export const formatDate = (date: string | number) => {
    return formatter.format(new Date(date))
}
