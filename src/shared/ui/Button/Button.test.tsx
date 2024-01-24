import { render, screen } from '@testing-library/react'
import { Button, ButtonTheme } from './Button'

describe('Button', () => {
    test('click', () => {
        render(<Button>CLICK!</Button>)
        expect(screen.getByText('CLICK!')).toBeInTheDocument()
    })

    test('theme', () => {
        render(<Button theme={ButtonTheme.CLEAR} className="color: red">CLICK!</Button>)
        expect(screen.getByText('CLICK!')).toHaveClass('clear')
        screen.debug()
    })
})
