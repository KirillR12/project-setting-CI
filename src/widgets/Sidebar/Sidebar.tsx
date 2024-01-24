import { classNames } from 'shared/lib'
import { useState } from 'react'
import IconsDark from 'shared/assets/icons/theme-dark.svg'
import IconsLight from 'shared/assets/icons/theme-light.svg'
import { Button } from 'shared/ui/Button/Button'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

export const Sidebar = () => {
    const [collapsed, setCollapsed] = useState(false)
    const { theme, toggleTheme } = useTheme()

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }

    const { t } = useTranslation()

    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.Sidebar, { [styles.collapsedStyles]: collapsed })}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={() => onToggle()}
            >
                {t('Развернуть')}
            </Button>

            <div className={styles.links}>
                <Button onClick={() => toggleTheme()}>
                    {theme === Theme.LIGTH ? <IconsLight /> : <IconsDark />}
                </Button>
            </div>

        </div>
    )
}
