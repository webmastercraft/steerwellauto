import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import * as browseActions from './store/actions'


function transformRequest(parms) {
  return Transformer.send(parms)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}

export function getBrowseData() {
  return dispatch => {
    Http.get(`pages/browser`)
      .then((res) => {
        dispatch(browseActions.get_BrowseData(transformResponse(res.data)))
        dispatch(browseActions.changeMileageValue(transformResponse(res.data.mileage.min),transformResponse(res.data.mileage.max)))
        dispatch(browseActions.changePriceValue(transformResponse(res.data.price.min),transformResponse(res.data.price.max)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function getDetailData(id) {
  return dispatch => {
    Http.get(`pages/detail/${id}`)
      .then((res) => {
        dispatch(browseActions.get_DetailData(res.data))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function getSearchData(condition) {
  return dispatch => {
    Http.post(`vehicles/search`,condition)
      .then((res) => {
        dispatch(browseActions.get_SearchData(res.data))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}
