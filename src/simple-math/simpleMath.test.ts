import { add, subtract } from './simpleMath'

describe('add', () => {
  test('2 plus 3 should be 5', () => {
    expect(add(2, 3)).toBe(5)
  })
  test('1 plus 6 should be 7', () => {
    expect(add(1, 6)).toBe(7)
  })
})

describe('subtract', () => {
  test('4 minus 2 should be 2', () => {
    expect(subtract(4, 2)).toBe(2)
  })
  test('10 minus 4 should be 6', () => {
    expect(subtract(10, 4)).toBe(6)
  })
})
