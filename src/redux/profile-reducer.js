const ADD_POST = 'add-post';
const ON_POST_CHANGE = 'on-post-change';

const initialState = {
	posts: [
		{ message: 'Hi!', likeCount: '1' },
		{ message: 'How are you?', likeCount: '3' },
		{ message: 'This is my first post', likeCount: '10' },
	],
	newPostText: ''
}
const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts,{
					message: action.post,
					likeCount: '0'
				}],
				newPostText: ''
			};
		case ON_POST_CHANGE:		
			return {
				...state,
				newPostText: action.text
			};
		default:
			return state;
	}
}

export const addPostActionCreator = (post) => ({ type: ADD_POST, post: post });

export const onPostChangeActionCreator = (text) => ({ type: ON_POST_CHANGE, text: text });


export default profileReducer;