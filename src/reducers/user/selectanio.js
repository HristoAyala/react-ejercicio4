import { combineReducers } from 'redux'
import { SELECT_ANIO } from '../../actions/user/selectanio'

const selectedanio = (stateDefault = {}, action) => {
  switch (action.type) {
    case SELECT_ANIO:
      return action.payload
    default:
      return stateDefault
  }
}

const selectedanio1 = (stateDefault = {}, action) => {
  switch (action.type) {
    case '111':
      return action.payload
    default:
      return stateDefault
  }
}

export default combineReducers({ selectedanio, selectedanio1 })
