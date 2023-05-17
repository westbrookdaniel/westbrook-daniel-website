import { Project } from '../data/projects'

export default function ProjectItem({ project }: { project: Project }) {
    return (
        <a href={project.href} target="_blank" rel="noopener noreferrer">
            <h3 class="font-body text-accent">{project.title}</h3>
        </a>
    )
}
