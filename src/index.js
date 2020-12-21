import {useStyletron} from 'styletron-react'
import {mergeRecursively} from 'standard-functions'

export function useCss() {
    const [css] = useStyletron()

    function mergeStyles(...styles) {
        const firstItem = styles[0]
        if (Array.isArray(firstItem)) {
            return mergeStyles(...firstItem)
        }

        return css(mergeRecursively(styles))
    }

    return mergeStyles
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