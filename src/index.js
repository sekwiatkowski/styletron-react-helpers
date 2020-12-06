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

export function joinClassNames(...names) {
    return { className: names.filter(n => n).join(' ') }
}