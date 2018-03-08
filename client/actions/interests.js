import request from 'superagent'

import {showError} from './error'
// import baseUrl from '../lib/base-url'

export const RECEIVE_INTERESTS = 'RECEIVE_INTERESTS'

export const receiveInterests = (interests) => {
  return {
    type: RECEIVE_INTERESTS,
    interests
  }
}

export function getInterests () {
  return (dispatch) => {
    request('get', 'https://marama.org.nz/api/v1/interests')
      .then(res => {
        dispatch(receiveInterests(res.body.interests))
      })
      .catch(() => {
        dispatch(showError('An unexpected error in getting information'))
      })
  }
}
