import DetailedProjectItem from '../components/DetailedProjectItem'
import { Divider } from '../components/Divider'
import ProjectItem from '../components/ProjectItem'
import { projects, detailedProjects } from '../data/projects'

export default async function Projects() {
    meta.from({
        title: 'Projects',
    })

    return (
        <div class="space-y-28">
            <div class="min-h-[33vh] flex flex-col justify-center space-y-4 md:space-y-8 py-16">
                <h1 class="text-4xl xs:text-5xl md:text-6xl">I Made These</h1>
                <Divider />
                <div class="space-y-2">
                    <p>Some maybe useful, some may be interesting.</p>
                </div>
            </div>

            <div class="space-y-4 flex flex-col">
                {detailedProjects.map(project => (
                    <DetailedProjectItem project={project} />
                ))}
            </div>

            <div class="space-y-8">
                <h2 class="text-4xl">Others</h2>

                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-16">
                    {projects.map(project => (
                        <ProjectItem project={project} />
                    ))}
                </div>
            </div>
        </div>
    )
}
