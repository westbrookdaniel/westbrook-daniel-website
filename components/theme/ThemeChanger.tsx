import { BsMoonFill } from 'react-icons/bs'
import { useTheme } from '../theme/ThemeHandler'
import { normalTransition } from '../../util/constants'

interface Props {
    className?: string
}

const ThemeChanger: React.FC<Props> = ({ className = '' }) => {
    const rotateTheme = useTheme(s => s.rotateTheme)
    return (
        <div
            className={`${normalTransition} inline-flex space-x-3 items-center cursor-pointer color-hover ${className}`}
            onClick={rotateTheme}
        >
            <p style={{ marginTop: '2px' }} className="select-none">
                Change Theme
            </p>
            <BsMoonFill fontSize="1.2em" />
        </div>
    )
}

export default ThemeChanger
