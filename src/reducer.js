import {setEntries, next, vote, INITAL_STATE} from './core'
import {Map} from 'immutable'

const actions = Map({
  'SET_ENTRIES': (state, action) => setEntries(state, action.entries),
  'NEXT': next,
  'VOTE': (state, action) => state.update('vote', voteState => vote(voteState, action.entry))
})

export default (state = INITAL_STATE, action) => {
  return actions.get(action.type, () => state)(state, action)
}
