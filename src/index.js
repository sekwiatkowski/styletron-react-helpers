import {useStyletron} from 'styletron-react'

function mergeStyles(styles) {
    return styles.reduce(
        (acc, style) => ({ ...acc, ...style}),
        {}
    )
}

export function useCss() {
    const [css] = useStyletron()

    return (...styles) => {
        return css(mergeStyles(styles))
    }
}

export function className(className) {
    return { className }
}

export function useClassName() {
    const [css] = useStyletron()

    return (...styles) => className(css(mergeStyles(styles)))
}

export function visited(...styles) {
    return {
        ':visited': mergeStyles(styles)
    }
}

export function hover(...styles) {
    return {
        ':hover': mergeStyles(styles)
    }
}