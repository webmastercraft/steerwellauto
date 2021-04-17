
import { FaqActionTypes } from './action-types'

// const initialState = Object.assign({})

function reducer (state = {}, action){
	switch (action.type) {
		case FaqActionTypes.GET_FAQDATA:
			return {
				...state,
				faqdata: action.faq_data
			}
		default:
      		return state
	}
}


export default reducer