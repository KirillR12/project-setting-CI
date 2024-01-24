import { fireEvent, screen } from '@testing-library/react'
import { renderWithTransition } from 'shared/lib/test/renderWithTransition/renderWithTransition'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
    test('click', () => {
        renderWithTransition(<Sidebar />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })

    test('test toggle', () => {
        renderWithTransition(<Sidebar />)
        const toggleTest = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleTest)
        expect(screen.getByTestId('sidebar')).toHaveClass('Sidebar collapsedStyles')
        screen.debug()
    })
})
