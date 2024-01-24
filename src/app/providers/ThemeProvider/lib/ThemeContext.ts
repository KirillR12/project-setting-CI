import { createContext } from 'react'

export enum Theme {
    LIGTH = 'ligth',
    DARK = 'dark'
}

export interface ThemeContextProps {
    theme?: Theme;
    setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const THEME_KEY_LOCAL_STORAGE = 'theme'
