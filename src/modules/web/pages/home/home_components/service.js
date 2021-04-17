import Http from '../../../../../utils/Http'
import Transformer from '../../../../../utils/Transformer'
import * as homeActions from '../store/actions'

function transformRequest(params) {
  return Transformer.send(params)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}

export function getTopOffers() {
  return dispatch => {
    Http.get(`favourites/vehicles`)
      .then((res) => {
        dispatch(homeActions.getTopOffers(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function getLatestNews() {
  return dispatch => {
    Http.get(`articles`)
      .then((res) => {
        dispatch(homeActions.getLatestNews(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}