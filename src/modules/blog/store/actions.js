
import { BlogActionTypes } from './action-types';

export const blogActions = {
	get_BlogData,
	get_ArticleData,
}

export function get_BlogData(blog_data) {
	return {
    	type: BlogActionTypes.GET_BLOGDATA,
    	blog_data
  	}	
}

export function get_ArticleData(article_data) {
	return {
    	type: BlogActionTypes.GET_ARTICLEDATA,
    	article_data
  	}	
}