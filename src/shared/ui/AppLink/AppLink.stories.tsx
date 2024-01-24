import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        to: '/',
        children: 'AppLink',
    },
}

export const Clear: Story = {
    args: {
        to: '/',
        children: 'Button',
        theme: AppLinkTheme.SECONDARY,
    },
}
