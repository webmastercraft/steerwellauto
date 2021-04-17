
import { BrowseActionTypes } from './action-types'

// const initialState = Object.assign({})

function reducer (state = {}, action){
	switch (action.type) {
		case BrowseActionTypes.CHANGE_MILEAGE_VALUE:
			return {
				...state,
				mileage_min: action.mileage_min,
				mileage_max: action.mileage_max
			}
		case BrowseActionTypes.CHANGE_PRICE_VALUE:
			return {
				...state,
				price_min: action.price_min,
				price_max: action.price_max
			}
		case BrowseActionTypes.GET_BROWSEDATA:
			return {
				...state,
				browsedata: action.browse_data
			}
		
		case BrowseActionTypes.GET_DETAILDATA:
			return {
				...state,
				detaildata: action.detail_data
			}

		case BrowseActionTypes.GET_SEARCHDATA:
			return {
				...state,
				searchdata: action.search_data
			}
		default:
      		return state
	}
}


export default reducer