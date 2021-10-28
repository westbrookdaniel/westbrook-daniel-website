import { codeFont } from './constants'

/**
 * Custom Gruvbox Theme
 *
 * Adapted from a theme based on:
 * Vim Gruvbox dark Theme (https://github.com/morhetz/gruvbox)
 *
 * @author Daniel W. <westy12dan@gmail.com>
 * @version 1.0
 */

var theme = {
    plain: {
        backgroundColor: '#1d2021',
        color: '#ebdbb2',
        fontFamily: codeFont,
    },
    styles: [
        {
            types: ['comment', 'prolog', 'cdata'],
            style: {
                color: '#a89984',
            },
        },
        {
            types: [
                'delimiter',
                'boolean',
                'keyword',
                'selector',
                'important',
                'atrule',
            ],
            style: {
                color: '#fb4934',
            },
        },
        {
            types: ['operator', 'punctuation', 'attr-name'],
            style: {
                color: '#a89984',
            },
        },
        {
            types: ['tag', 'tag punctuation', 'doctype', 'builtin'],
            style: {
                color: '#fabd2f',
            },
        },
        {
            types: ['entity', 'number', 'symbol'],
            style: {
                color: '#d3869b',
            },
        },
        {
            types: ['property', 'constant', 'variable'],
            style: {
                color: '#fb4934',
            },
        },
        {
            types: ['string', 'char'],
            style: {
                color: '#b8bb26',
            },
        },
        {
            types: ['attr-value', 'attr-value punctuation'],
            style: {
                color: '#a89984',
            },
        },
        {
            types: ['url'],
            style: {
                color: '#b8bb26',
                textDecoration: 'underline',
            },
        },
        {
            types: ['string', 'char'],
            style: {
                color: '#b8bb26',
            },
        },
        {
            types: ['regex'],
            style: {
                background: '#b8bb26',
            },
        },
        {
            types: ['bold'],
            style: {
                fontWeight: 'bold',
            },
        },
        {
            types: ['italic'],
            style: {
                fontStyle: 'italic',
            },
        },
        {
            types: ['inserted'],
            style: {
                background: '#a89984',
            },
        },
        {
            types: ['deleted'],
            style: {
                background: '#fb4934',
            },
        },
    ],
}

export default theme
