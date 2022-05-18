import type { GetStaticProps } from 'next'
import type { DetailedProject } from '../data/projects'
import { projects } from '../data/projects'
import type { WithImageProps } from './getImageProps.server'
import { getImageProps } from './getImageProps.server'

export type DetailedProjectWithImage = DetailedProject & WithImageProps

export const getStaticProps: GetStaticProps = async () => {
    const promises = projects.map(async p => {
        return { ...p, imageProps: await getImageProps(p.screenshot) }
    })
    const projectsWithImages: DetailedProjectWithImage[] = await Promise.all(
        promises
    )
    return { props: { projects: projectsWithImages } }
}
