
import { HomeActionTypes } from './action-types';

export const homepageActions = {
	getCategoryData,
	getBrandData,
	getRecentAdded,
	getTopOffers,
	getLatestNews,
	getReviews
}

export function getCategoryData(categories) {
  	return {
    	type: HomeActionTypes.GET_CATEGORIES,
    	categories
  	}
}
export function getBrandData(brands) {
  	return {
    	type: HomeActionTypes.GET_BRANDS,
    	brands
  	}
}
export function getRecentAdded(recent_items) {
  	return {
    	type: HomeActionTypes.GET_RECENT_CARS,
    	recent_items
  	}
}
export function getTopOffers(top_offers) {
  	return {
    	type: HomeActionTypes.GET_TOPOFFERS,
    	top_offers
  	}
}
export function getLatestNews(latest_news) {
  	return {
    	type: HomeActionTypes.GET_LATESTNEWS,
    	latest_news
  	}
}
export function getReviews(reviews) {
  	return {
    	type: HomeActionTypes.GET_REVIEWS,
    	reviews
  	}
}
