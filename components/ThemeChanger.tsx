import { AiFillTool } from 'react-icons/ai'
import { useTheme } from '../pages/ThemeHandler'
import { normal } from '../util/transition'

interface Props {
    className?: string
}

const ThemeChanger: React.FC<Props> = ({ className = '' }) => {
    const rotateTheme = useTheme(s => s.rotateTheme)
    return (
        <AiFillTool
            fontSize="1.3em"
            className={`${normal} cursor-pointer color-hover ${className}`}
            onClick={rotateTheme}
        />
    )
}

export default ThemeChanger
