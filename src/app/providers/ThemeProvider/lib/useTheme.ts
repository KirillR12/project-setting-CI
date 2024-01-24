import { useContext } from 'react'
import { THEME_KEY_LOCAL_STORAGE, Theme, ThemeContext } from './ThemeContext'

interface useThemeResult {
    theme: Theme,
    toggleTheme: () => void
}

export function useTheme(): useThemeResult {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => {
        const toggleHalper = theme === Theme.LIGTH ? Theme.DARK : Theme.LIGTH
        setTheme(toggleHalper)
        localStorage.setItem(THEME_KEY_LOCAL_STORAGE, toggleHalper)
    }

    return {
        theme,
        toggleTheme,
    }
}
