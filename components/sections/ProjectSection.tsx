import Link from 'next/link'
import Container from '../layout/Container'
import ProjectGrid from '../layout/ProjectGrid'
import ProjectItem from './ProjectItem'
import SmallItem from './SmallItem'

interface Props {
	data: any
	small?: boolean
	title: JSX.Element | string
}

const ProjectSection: React.FC<Props> = ({ data, small, title }) => {
	const projectItems = data.map((p: any) => () => {
		if (small) {
			return <SmallItem data={p} />
		}
		return <ProjectItem data={p} />
	})
	// if (small) {
	// 	console.log(projectItems);
	// }

	return (
		<Container spaced>
			{title}
			{small ? (
				<div className="mt-4 flex md:space-x-16 flex-col md:flex-row">
					{projectItems.map((Item: any, i: number) => (
						<Item key={i} />
					))}
				</div>
			) : (
				<ProjectGrid array={projectItems} />
			)}
		</Container>
	)
}

export default ProjectSection
