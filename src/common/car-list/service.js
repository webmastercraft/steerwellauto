import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import * as homeActions from '../../modules/web/pages/home/store/actions'

function transformRequest(params) {
  return Transformer.send(params)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}

export function getRecentAdded() {
  return dispatch => {
    Http.get(`vehicles/recent`)
      .then((res) => {
        dispatch(homeActions.getRecentAdded(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}
