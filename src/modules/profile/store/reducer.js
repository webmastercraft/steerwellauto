
import { ProfileActionTypes } from './action-types'

// const initialState = Object.assign({})

function reducer (state = {}, action){
	switch (action.type) {
		case ProfileActionTypes.CHANGE_COMPONENT_ACTIVE:
			return {
				...state,
				active_comp_num: action._number,
				isChatting: false
			}
		case ProfileActionTypes.FETCH_USER_INFO:
			return {
				...state,
				profile: action.userData.personalData,
				messages: action.userData.messageData,
				transactions: action.userData.transactionData,
				favorites: action.userData.favouriteData
			}
		case ProfileActionTypes.UPDATE_PROFILE:
			return {
				...state,
				updateUserResponse: action.updateUserResponse,
			}
		case ProfileActionTypes.CHATTING:
			return {
				...state,
				isChatting: action.isChatting,
			}
		case ProfileActionTypes.UPDATE_PASSWORD:
			return {
				...state,
				updatePasswordResponse: action.updatePasswordResponse,
			}
		default:
      		return state
	}
}

export default reducer