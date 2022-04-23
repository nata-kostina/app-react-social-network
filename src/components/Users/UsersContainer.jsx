import Users from './Users';
import { followAC } from './../../redux/users-reducer';
import { unfollowAC } from './../../redux/users-reducer';
import { setUsersAC } from './../../redux/users-reducer';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {

	return {
		users: state.usersReducer.users
	}
}

const mapDispatchToProps = (dispatch) => {

	return {
		follow: (userID) => dispatch(followAC(userID)),
		unfollow:(userID) => dispatch(unfollowAC(userID)),
		setUsers: () => dispatch(setUsersAC())
	}
}

const UsersContainer = connect (mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;