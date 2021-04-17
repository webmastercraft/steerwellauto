import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import { profileActions } from './store/actions'

export const profileService = {
	fetchUserData,
	updateProfile,
	updatePassword,
};

/**
 * fetch the current logged in user
 *
 * @returns {function(*)}
 */
function fetchUserData( _userId ) {
  	return dispatch => {
	    return Http.get(`/pages/profile/${ _userId }`)
	      	.then(res => {
	        	const personalData = Transformer.fetch(res.data)
	        	dispatch(profileActions.fetchUserInfo(personalData))
	      	})
	      	.catch(err => {
	        	console.log(err)
      	})
	}
}

/**
 * update the user profile
 *
 * @returns {function(*)}
 */

function updateProfile ( _newProfile ) {
	return dispatch => {
		return Http.post('users/update', _newProfile)
			.then(res => {
				dispatch(profileActions.updateProfile( res.data ))
			})
			.catch(err => {
				console.log("updateProfile Error Response", err.response.data);
				dispatch(profileActions.updateProfile( err.response.data ));
			})
	}
}

/**
 * update the user password
 *
 * @returns { response }
 */

function updatePassword ( _newPass ) {
	return dispatch => {
		return Http.post('auth/reset', _newPass)
			.then(res => {
				dispatch(profileActions.updateUserPwd( res.data ))
			})
			.catch(err => {
				dispatch(profileActions.updateUserPwd( err.response.data ));
			})
	}
}

/**
 * fetch messages
 *
 * @returns { response }
 */

function fetchTrans ( _newPass ) {
	return dispatch => {
		return Http.post('transactions', _newPass)
			.then(res => {
				dispatch(profileActions.updateUserPwd( res.data ))
			})
			.catch(err => {
				console.log(message);
			})
	}
}
