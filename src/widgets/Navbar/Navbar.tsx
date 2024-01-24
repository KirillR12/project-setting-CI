import { classNames } from 'shared/lib'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import styles from './styles.module.scss'

 interface NavbarProps {
   className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(styles.Navbar, {}, [className])}>
        <div className={styles.links}>
            <AppLink to="AboutPage">AboutPage</AppLink>
            <AppLink to="MainPage">MainPage</AppLink>
        </div>
    </div>
)
