import { classNames } from './classNames'

describe('classNames', () => {
    test('', () => {
        expect(classNames('styles', { hovered: true }, ['class1', 'class2']))
            .toBe('styles class1 class2 hovered')
    })
})
