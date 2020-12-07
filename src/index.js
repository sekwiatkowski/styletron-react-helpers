import {useStyletron} from 'styletron-react'

function merge(styles) {
    return styles
        .reduce(
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

export function joinClassNames(...items) {
    const firstItem = items[0]

    if (Array.isArray(firstItem)) {
        return joinClassNames(...firstItem)
    }

    return items
        .filter(n => n)
        .join(' ')
}