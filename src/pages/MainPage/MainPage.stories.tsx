import type { Meta, StoryObj } from '@storybook/react'
import 'app/styles/index.scss'
import MainPage from './MainPage'

const meta = {
    title: 'pages/MainPage',
    component: MainPage,
} satisfies Meta<typeof MainPage>

export default meta
type Story = StoryObj<typeof meta>;

export const Clear: Story = {
    args: {
        backgroundColor: 'red',
    },
}
