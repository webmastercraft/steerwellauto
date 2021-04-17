import Http from '../../../../utils/Http'
import Transformer from '../../../../utils/Transformer'
import * as faqActions from './store/actions'


function transformRequest(parms) {
  return Transformer.send(parms)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}

export function getFaqData() {
  return dispatch => {
    Http.get(`faq`)
      .then((res) => {
        dispatch(faqActions.get_FaqData(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

