import { BsMoon } from 'react-icons/bs'
import { useTheme } from './ThemeHandler'
import { normal } from '../util/transition'

interface Props {
    className?: string
}

const ThemeChanger: React.FC<Props> = ({ className = '' }) => {
    const rotateTheme = useTheme(s => s.rotateTheme)
    return (
        <div
            className={`${normal} inline-flex space-x-3 items-center cursor-pointer color-hover ${className}`}
            onClick={rotateTheme}
        >
            <BsMoon fontSize="1.2em" />
            <p style={{ marginTop: '2px' }} className="md:hidden select-none">
                Change Theme
            </p>
        </div>
    )
}

export default ThemeChanger
