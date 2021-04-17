
import { BlogActionTypes } from './action-types'

// const initialState = Object.assign({})

function reducer (state = {}, action){
	switch (action.type) {
		case BlogActionTypes.GET_BLOGDATA:
			return {
				...state,
				blogdata: action.blog_data
			}
		case BlogActionTypes.GET_ARTICLEDATA:
			return {
				...state,
				articledata: action.article_data
			}
		default:
      		return state
	}
}


export default reducer