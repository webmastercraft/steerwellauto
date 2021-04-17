import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import * as homeActions from '../../modules/web/pages/home/store/actions'

function transformRequest(params) {
  return Transformer.send(params)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}

export function getCategoryData() {
  return dispatch => {
    Http.get(`categories`)
      .then((res) => {
        dispatch(homeActions.getCategoryData(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}
