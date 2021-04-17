
import { ProfileActionTypes } from './action-types';

export const profileActions = {
	changeActiveCompNum,
	fetchUserInfo,
	updateProfile,
	chatting,
	updateUserPwd,
	fetchTransactions,
}

function changeActiveCompNum(_number) {
	return {
		type: ProfileActionTypes.CHANGE_COMPONENT_ACTIVE,
		_number
	};
}

function fetchUserInfo (userData) {
	return {
		type: ProfileActionTypes.FETCH_USER_INFO,
		userData
	};
}

function updateUserPwd ( updatePasswordResponse ) {
	return {
		type: ProfileActionTypes.UPDATE_PASSWORD,
		updatePasswordResponse
	}
}

function updateProfile (updateUserResponse) {
	return {
		type: ProfileActionTypes.UPDATE_PROFILE,
		updateUserResponse
	};
}

function chatting ( isChatting ) {
	return {
		type: ProfileActionTypes.CHATTING,
		isChatting
	};
}

function fetchTransactions ( data ) {
	return {
		type: ProfileActionTypes.FETCH_TRANSACTIONS,
		data
	}
}

