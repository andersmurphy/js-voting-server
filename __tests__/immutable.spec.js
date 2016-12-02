describe('immutability', () => {

  describe('a number', () => {
    function increment(currentState) {
      return currentState + 1
    }

    it('is immutable', () => {
      let state = 42
      let nextState = increment(state)

      expect(nextState).toEqual(43)
      expect(state).toEqual(42)
    })
  })
})
