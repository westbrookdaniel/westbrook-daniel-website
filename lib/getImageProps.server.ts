import type { IGetPlaiceholderReturn } from 'plaiceholder'
import { getPlaiceholder } from 'plaiceholder'

type ImageType = IGetPlaiceholderReturn['img']

export interface ImageProps extends ImageType {
    blurDataURL: IGetPlaiceholderReturn['base64']
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
