
import { BrowseActionTypes } from './action-types';

export const browseActions = {
	changeMileageValue,
	changePriceValue,
	get_BrowseData,
	get_DetailData,
	get_SearchData,
}

export function changeMileageValue(mileage_min, mileage_max) {
	return {
		type:BrowseActionTypes.CHANGE_MILEAGE_VALUE,
		mileage_min,
		mileage_max
	}
}

export function changePriceValue(price_min, price_max) {
	return {
		type:BrowseActionTypes.CHANGE_PRICE_VALUE,
		price_min,
		price_max,
	}
}

export function get_BrowseData(browse_data) {
  	return {
    	type: BrowseActionTypes.GET_BROWSEDATA,
    	browse_data
  	}
}

export function get_DetailData(detail_data) {
	return {
    	type: BrowseActionTypes.GET_DETAILDATA,
    	detail_data
  	}	
}

export function get_SearchData(search_data) {
	return {
    	type: BrowseActionTypes.GET_SEARCHDATA,
    	search_data
  	}	
}