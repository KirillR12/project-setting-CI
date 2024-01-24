import { Decorator } from '@storybook/react'
import { Theme } from 'app/providers/ThemeProvider'
import 'app/styles/index.scss'

// eslint-disable-next-line max-len
export const ThemeDecorator = (theme: Theme) => (Story: () => void) => <div className={`app ${theme}`}>{Story()}</div>
