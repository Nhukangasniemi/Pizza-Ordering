import 'styled-components'

declare module 'styled-components' {
    export interface DefaultThem {
        borderRadius: string

        colors: {
            main: string
            secondary: string
        }
    }
}