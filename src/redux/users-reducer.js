const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';
const SET_USERS = 'set-users';

const initialState = {
	users: [
		{ id: 0, name: 'John', surname: 'Smith', location: { country: 'The USA', city: 'Philadelphia' }, followed: true },
		{ id: 1, name: 'Victoria', surname: 'Petrova', location: { country: 'Belarus', city: 'Polotsk' }, followed: false },
		{ id: 2, name: 'Bob', surname: 'Ford', location: { country: 'The UK', city: 'London' }, followed: false },
	]
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			debugger;
			return {
				...state,
				users: [...state.users.map(u => {
					if (u.id === action.userID) {
						return { ...u, followed: true }
					}
					return u;
				})
				]
			}

		case UNFOLLOW:
			return {
				...state,
				users: [...state.users.map(u => {
					if (u.id === action.userID) {
						return { ...u, followed: false }
					}
					return u;
				})
				]
			}
		case SET_USERS: 
		return state;
		default:
			return state;
	}
}

export const followAC = (userID) => ({ type: FOLLOW, userID });
export const unfollowAC = (userID) => ({ type: UNFOLLOW, userID });
export const setUsersAC = () => ({ type: SET_USERS });

export default usersReducer;

