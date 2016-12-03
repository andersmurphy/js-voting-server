import {setEntries, next, vote, INITAL_STATE} from './core'

export default function reducer(state = INITAL_STATE, action) {
  switch (action.type) {
    case 'SET_ENTRIES':
        return setEntries(state, action.entries)
    case 'NEXT':
        return next(state)
    case 'VOTE':
        return vote(state, action.entry)
  }
  return state
}
