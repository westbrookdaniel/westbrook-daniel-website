import { BsMoonFill } from 'react-icons/bs'
import { useTheme } from '../theme/ThemeHandler'
import { normalTransition } from '../../util/constants'
import { Button } from '../common/Button'

interface Props {
    className?: string
}

const ThemeChanger: React.FC<Props> = ({ className = '' }) => {
    const rotateTheme = useTheme(s => s.rotateTheme)
    return (
        <div
            className={`${normalTransition} color-hover inline-flex cursor-pointer items-center space-x-3 ${className}`}
            onClick={rotateTheme}
        >
            <Button>
                <span className="mr-4">Change Theme</span>
                <BsMoonFill fontSize="1.2em" />
            </Button>
        </div>
    )
}

export default ThemeChanger

// <p className="select-none">Change Theme</p>
