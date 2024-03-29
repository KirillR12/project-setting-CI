import { FC, useMemo, useState } from 'react'
import { THEME_KEY_LOCAL_STORAGE, Theme, ThemeContext } from '../../lib/ThemeContext'

export const ThemeProvider: FC = ({ children }) => {
    const constantLS = localStorage.getItem(THEME_KEY_LOCAL_STORAGE) as Theme || Theme.LIGTH
    const [theme, setTheme] = useState<Theme>(constantLS)

    const defaultProps = useMemo(() => ({
        theme,
        setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    )
}
