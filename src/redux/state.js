import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';


const store = {
	_state: {
		profilePage: {
			posts: [
				{ message: 'Hi!', likeCount: '1' },
				{ message: 'How are you?', likeCount: '3' },
				{ message: 'This is my first post', likeCount: '10' },
			],
			newPostText: ''
		},
		dialogsPage: {
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
		},
		sideBar: {
			friends: [
				{ name: 'Andrew' },
				{ name: 'Masha' },
				{ name: 'Sveta' },
			]
		}
	},

	_callSubscriber() { },
	getState() { return this._state },

	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		debugger
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);		
		this._callSubscriber(this);
	}
}



export default store;

