import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import * as homeActions from '../../modules/web/pages/home/store/actions'

function transformRequest(params) {
  return Transformer.send(params)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}

export function getReviews() {
  return dispatch => {
    Http.get(`reviews`)
      .then((res) => {
        dispatch(homeActions.getReviews(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}
