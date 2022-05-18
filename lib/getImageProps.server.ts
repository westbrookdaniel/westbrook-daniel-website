import { getPlaiceholder } from 'plaiceholder'

// TODO: Dynamically type this from getPlaiceholder's return type?
export interface ImageProps {
    src: string
    height: number
    width: number
    type?: string
    blurDataURL: string
}

// Not directly used in this file but very handy
export interface WithImageProps {
    imageProps: ImageProps
}

export async function getImageProps(src: string): Promise<ImageProps> {
    const { base64, img } = await getPlaiceholder(src)
    return { ...img, blurDataURL: base64 }
}

// TODO: Need a solution to do this for blog post images
