import { classNames } from 'shared/lib'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'

 interface NavbarProps {
   className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={styles.links}>
                <AppLink to="AboutPage">{t('AboutPage')}</AppLink>
                <AppLink to="MainPage">{t('MainPage')}</AppLink>
            </div>
        </div>
    )
}
