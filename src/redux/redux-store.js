import {combineReducers,createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogReducer from './dialog-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
let reducers = combineReducers({
	profileReducer,
	dialogReducer,
	sidebarReducer,
	usersReducer
});

let store = createStore(reducers);

export default store;