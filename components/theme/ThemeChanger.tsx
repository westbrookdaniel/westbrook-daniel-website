import { BsMoonFill } from 'react-icons/bs'
import { useTheme } from '../theme/ThemeHandler'
import { normalTransition } from '../../util/constants'
import { Button } from '../common/Button'
import { event } from 'nextjs-google-analytics'
import { gaId } from '../../pages/_app'

interface Props {
    className?: string
}

const ThemeChanger: React.FC<Props> = ({ className = '' }) => {
    const [rotateTheme, theme] = useTheme(s => [s.rotateTheme, s.theme])
    return (
        <div
            className={`${normalTransition} color-hover inline-flex cursor-pointer items-center space-x-3 ${className}`}
            onClick={() => {
                event('rotate_theme', {
                    category: 'Interactions',
                    label: theme,
                })
                rotateTheme()
            }}
        >
            <Button>
                <span className="mr-4">Change Theme</span>
                <BsMoonFill fontSize="1.2em" />
            </Button>
        </div>
    )
}

export default ThemeChanger
