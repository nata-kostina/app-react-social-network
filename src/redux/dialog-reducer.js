const UPDATE_NEW_MESSAGE_BODY = 'update-new-message-body';
const SEND_MESSAGE = 'send-message';

const initialState = {
	messages: [
		{ message: "Hi!", id: "1" },
		{ message: "How are you?", id: "2" },
		{ message: "Yo", id: "3" },
		{ message: "Yo", id: "4" },
		{ message: "Yo", id: "5" },
	],

	dialogs: [
		{ name: "Alice", id: "1" },
		{ name: "Bob", id: "2" },
		{ name: "Candy", id: "3" },
		{ name: "David", id: "4" },
		{ name: "Eva", id: "5" },
	],
	newMessageBody: '',
}
const dialogReducer = (state = initialState, action) => {	

	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody:  action.message
			};
		case SEND_MESSAGE:
			return {
				...state,
				messages: [...state.messages, {
					message: state.newMessageBody,
					id: 6
				}],
				newMessageBody:''
			};
		default:
			return state;
	}
}


export const changeMessageActionCreator = (message) => ({ type: UPDATE_NEW_MESSAGE_BODY, message });

export const onSendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export default dialogReducer;