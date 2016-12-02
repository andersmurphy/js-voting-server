import {List, Map} from 'immutable'
import {setEntries} from '../src/core'

describe('application logic', () => {

  describe('setEntries', () => {

    it('adds the entries to the state', () => {
      const state = Map();
      const entries = List.of('Trainspotting', '28 Days Later')
      const nextState = setEntries(state, entries)
      expect(nextState).toEqual(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }))
    })

  })

})
