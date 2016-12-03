import {createStore} from 'redux'
import reducer from './reducer'

export default function makeSotre() {
  return createStore(reducer)
}
