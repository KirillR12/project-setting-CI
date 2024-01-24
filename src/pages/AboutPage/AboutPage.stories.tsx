import type { Meta, StoryObj } from '@storybook/react'
import 'app/styles/theme/dark.scss'
import AboutPage from './AboutPage'

const meta = {
    title: 'pages/AboutPage',
    component: AboutPage,
} satisfies Meta<typeof AboutPage>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        className: 'app dark',
    },
}
