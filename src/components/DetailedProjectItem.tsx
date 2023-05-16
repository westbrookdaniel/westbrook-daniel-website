import { DetailedProject } from '../data/projects'

export default function DetailedProjectItem({
    project,
}: {
    project: DetailedProject
}) {
    return (
        <div class="space-y-2 group/post">
            <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                class="no-underline w-full"
            >
                <h3 class="font-body underline group-hover/post:no-underline mb-1">
                    {project.title}
                </h3>
                <div class="flex flex-row justify-between text-text">
                    <p>{project.description}</p>
                    <div class="flex-grow border-t-2 border-text/10 self-center mx-4 hidden md:block" />
                </div>
            </a>
        </div>
    )
}
