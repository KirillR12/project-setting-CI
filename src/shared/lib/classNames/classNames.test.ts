import { classNames } from './classNames'

describe('classNames', () => {
    test('', () => {
        expect(classNames('styles', { hovered: true }, ['class1', 'class2']))
            .toBe('styles hovered class1 class2')
    })
})
