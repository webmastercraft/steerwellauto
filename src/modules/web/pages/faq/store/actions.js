
import { FaqActionTypes } from './action-types';

export const faqActions = {
	get_FaqData,
}

export function get_FaqData(faq_data) {
	return {
    	type: FaqActionTypes.GET_FAQDATA,
    	faq_data
  	}	
}