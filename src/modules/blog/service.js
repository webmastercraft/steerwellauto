import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import * as blogActions from './store/actions'


function transformRequest(parms) {
  return Transformer.send(parms)
}

function transformResponse(params) {
  return Transformer.fetch(params)
}

export function getBlogData() {
  return dispatch => {
    Http.get(`pages/articles`)
      .then((res) => {
        dispatch(blogActions.get_BlogData(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

export function getArticleData(id) {
  return dispatch => {
    Http.get(`pages/articles/${id}`)
      .then((res) => {
        dispatch(blogActions.get_ArticleData(transformResponse(res.data)))
      })
      .catch((err) => {
        // TODO: handle err
        console.error(err.response)
      })
  }
}

