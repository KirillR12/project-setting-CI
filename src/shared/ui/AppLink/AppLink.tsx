import { classNames } from 'shared/lib'
import { Link, LinkProps, MemoryRouter } from 'react-router-dom'
import { FC } from 'react'
import styles from './styles.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

 interface AppLinkProps extends LinkProps {
   className?: string,
   theme?: string

}

export const AppLink: FC <AppLinkProps> = (props) => {
    const {
        to,
        theme = AppLinkTheme.SECONDARY,
        className,
        children,
        ...otherProps
    } = props

    return (
        <Link
            className={classNames(styles.AppLink, {}, [className, styles[theme]])}
            to={to}
            {...otherProps}
        >
            {children}
        </Link>
    )
}
