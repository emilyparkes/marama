import {combineReducers} from 'redux'
import interests from './interests'
import interestType from './type'
import typeDetails from './type-details'
import grants from './grants'
import update from './update'
import updateTypes from './update-types'

export default combineReducers({
  interests,
  interestType,
  typeDetails,
  grants,
  update,
  updateTypes
})
