import tailwind from '../tailwind.config'

export const codeFont = `'${tailwind.theme.fontFamily.mono.join("', '")}'`

export const normalTransition = 'transition duration-200 ease-out'
export const fastTransition = 'transition duration-100 ease-out'
