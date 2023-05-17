import {
    lighten,
    desaturate,
    getContrast,
    parseToRgba,
    parseToHsla,
    hsla,
} from 'color2k'

type Rgb = number[]

/**
 * TODO: Customisation slider for contrast, vibrancy, and lightness
 */
export const getRandomTheme = () => {
    const newVars = {
        '--bg': randRgb(),
        '--text': randRgb(),
        '--accent': randRgb(),
    }

    /**
     * Found that ligtening text and desaturating background
     * gave the most consistent results for the feel I was going for
     */

    newVars['--text'] = parseToRgba(
        lighten(`rgb(${newVars['--text'].join(', ')})`, 0.6)
    ).slice(0, 3)

    newVars['--bg'] = parseToRgba(
        desaturate(`rgb(${newVars['--bg'].join(', ')})`, 0.3)
    ).slice(0, 3)

    newVars['--bg'] = toA11yColor(newVars['--bg'], newVars['--text'])
    newVars['--accent'] = toA11yColor(newVars['--accent'], newVars['--bg'])

    return newVars
}

/**
 * Find the nearest accessible color
 *
 * Note: Does not support alpha values
 *
 * @param fg The color that is to be changed
 * @param bg The background color to for the contrast
 * @param minimumContrast The WCAG 2.1 contrast ratio
 *
 * @return The closest rgb values for `toMakeA11y` on `background`
 */
const toA11yColor = (fg: Rgb, bg: Rgb, minimumContrast = 4.5): Rgb => {
    if (minimumContrast < 0 && minimumContrast > 21) {
        throw new Error(`Minimum contrast must be a number between 0 and 21`)
    }

    const fgStr = `rgb(${fg.join(',')})`
    const bgStr = `rgb(${bg.join(',')})`

    // Check the ratio straight away, if it passes early return
    if (getContrast(fgStr, bgStr) >= minimumContrast) {
        return fg
    }

    // Ratio didn't pass so we need to find the nearest color
    const fgHsl = parseToHsla(fgStr)
    const fgLightness = fgHsl[2]
    const minHexDiff = 100 / 255 // 255 Colors / 100% HSL

    const isBlackBgContrast = getContrast(bgStr, '#000') >= minimumContrast
    const isWhiteBgContrast = getContrast(bgStr, '#FFF') >= minimumContrast
    let minLightness = 0
    let maxLightness = 100
    let isDarkColor = false

    // If black and white both pass on the background
    if (isBlackBgContrast && isWhiteBgContrast) {
        // Change the min lightness if the color is light
        if (fgLightness >= 50) {
            minLightness = fgLightness
        } else {
            // Change the max lightness if the color is dark
            maxLightness = fgLightness
            isDarkColor = true
        }
    } else if (isBlackBgContrast) {
        // If our colour passes contrast on black
        maxLightness = fgLightness
        isDarkColor = true
    } else {
        // Colour doesn't meet contrast pass on black
        minLightness = fgLightness
    }

    // The colour to return
    let foundColor

    // Binary search until we find the colour that meets contrast
    while (!foundColor) {
        const midLightness = (minLightness + maxLightness) / 2
        const midA11y = hsla(fgHsl[0], fgHsl[1], midLightness, 1)

        // The colour meets contrast
        if (getContrast(midA11y, bgStr) >= minimumContrast) {
            // It is the minimal lightness range for one hexadecimal
            if (maxLightness - minLightness <= minHexDiff) {
                foundColor = midA11y
            } else if (isDarkColor) {
                // If it is going to be a dark color move the min to mid
                minLightness = midLightness
            } else {
                // If it is going to be a light color move the max to mid
                maxLightness = midLightness
            }
        } else if (isDarkColor) {
            // We do not meet minimum contrast if it is a dark color move max to mid
            maxLightness = midLightness
        } else {
            // If it is a light color move min to mid
            minLightness = midLightness
        }
    }

    return parseToRgba(foundColor).slice(0, 3)
}

const rand255 = () => {
    const min = 0
    const max = 255
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const randRgb = () => [rand255(), rand255(), rand255()]
