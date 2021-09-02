import {useStyletron} from 'styletron-react'
import {isArray, isSingle, merge} from 'standard-functions'

export function useCss() {
    const [css] = useStyletron()

    function mergeStyles(...styles) {
        if (isSingle(styles)) {
            const firstItem = styles[0]

            if (isArray(firstItem)) {
                return mergeStyles(...firstItem)
            }
        }

        return css(merge(styles))
    }

    return mergeStyles
}