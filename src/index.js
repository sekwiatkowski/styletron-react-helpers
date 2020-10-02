import {useStyletron} from 'styletron-react'

function merge(styles) {
    return styles.reduce(
        (acc, style) => ({ ...acc, ...style}),
        {}
    )
}

export function useCss() {
    const [css] = useStyletron()

    return (...styles) => {
        return css(merge(styles))
    }
}

export function className(...names) {
    return { className: names.join(' ') }
}

export function useClassName() {
    const [css] = useStyletron()

    return (...styles) => {
        return className(css(merge(styles)))
    }
}

export function visited(...styles) {
    return {
        ':visited': merge(styles)
    }
}

export function hover(...styles) {
    return {
        ':hover': merge(styles)
    }
}