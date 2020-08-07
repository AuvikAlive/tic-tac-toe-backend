import { add } from './add'

describe('add', () => {
  test('that it correctly adds two numbers', () => {
    expect(add(2, 2)).toBe(4)
  })
})
