import {List} from 'immutable'

describe('immutability', () => {

  describe('a number', () => {
    function increment(currentState) {
      return currentState + 1
    }

    it('is immutable', () => {
      const state = 42
      const nextState = increment(state)

      expect(nextState).toEqual(43)
      expect(state).toEqual(42)
    })
  })

  describe('a list', () => {
    function addMovie(currentState, movie) {
      return currentState.push(movie)
    }

    it('is immutable', () => {
      const state = List.of('Trainspotting', '28 Days Later')
      const nextState = addMovie(state, "Sunshine")

      expect(nextState).toEqual(List.of(
        'Trainspotting',
        '28 Days Later',
        'Sunshine'
      ))
      expect(state).toEqual(List.of(
        'Trainspotting',
        '28 Days Later'
      ))
    })
  })
})