export default function truncate(text: string, length = 40) {
    if (text.length > length) {
        return `${text.substring(0, length - 2).trim()}...`
    }
    return text
}
