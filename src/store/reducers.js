import { combineReducers } from 'redux'

import auth from '../modules/auth/store/reduer'
import user from '../modules/user/store/reducer'
import articles from '../modules/article/store/reducer'
import profile from '../modules/profile/store/reducer'
import browse from '../modules/browse/store/reducer'
import blog from '../modules/blog/store/reducer'
import faq from '../modules/web/pages/faq/store/reducer'

import home_data from '../modules/web/pages/home/store/reducer'

export default combineReducers({
		auth,
		user,
		articles,
		profile,
		browse,
		blog,
		faq,
		home_data
})
