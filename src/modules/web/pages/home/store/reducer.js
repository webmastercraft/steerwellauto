
import { HomeActionTypes } from './action-types'

// const initialState = Object.assign({})

function reducer (state = {}, action){
	switch (action.type) {
		case HomeActionTypes.GET_CATEGORIES:
			return {
				...state,
				categories: action.categories
			}
		case HomeActionTypes.GET_BRANDS:
			return {
				...state,
				brands: action.brands
			}
		case HomeActionTypes.GET_RECENT_CARS:
			return {
				...state,
				recent_items: action.recent_items
			}
		case HomeActionTypes.GET_TOPOFFERS:
			return {
				...state,
				top_offers: action.top_offers
			}
		case HomeActionTypes.GET_LATESTNEWS:
			return {
				...state,
				latest_news: action.latest_news
			}
		case HomeActionTypes.GET_REVIEWS:
			return {
				...state,
				reviews: action.reviews
			}
		default:
      		return state
	}
}


export default reducer