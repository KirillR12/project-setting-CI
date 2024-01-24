import { FC } from 'react'
import { classNames } from 'shared/lib'
import styles from './styles.module.scss'

export enum ButtonTheme {
CLEAR = 'clear',
OUTLINE = 'outline'
}

 interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string,
   theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme,
        ...otherProps
    } = props

    return (
        <button
            type="button"
            className={classNames(styles.Button, {}, [className, styles[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}
