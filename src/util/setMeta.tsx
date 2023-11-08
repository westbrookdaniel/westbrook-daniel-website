type Meta = {
    title?: string
    description?: string
    noSuffix?: boolean
}

export function setMeta(meta: Meta) {
    if (meta.title) {
        document.title = meta.noSuffix
            ? meta.title
            : `${meta.title} - Daniel Westbrook`
    }

    if (meta.description) {
        const description = document.querySelector(
            'meta[name="description"]'
        ) as HTMLMetaElement
        description.content = meta.description
    }
}
