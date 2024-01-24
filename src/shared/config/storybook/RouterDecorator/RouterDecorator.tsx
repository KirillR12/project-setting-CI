import { Decorator } from '@storybook/react'
import 'app/styles/index.scss'
import { MemoryRouter } from 'react-router-dom'

export const RouterDecorator: Decorator = (Story) => <MemoryRouter>{Story()}</MemoryRouter>
