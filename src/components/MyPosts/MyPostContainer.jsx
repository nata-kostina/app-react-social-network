import MyPosts from "./MyPosts";
import { addPostActionCreator, onPostChangeActionCreator } from './../../redux/profile-reducer';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
	return {
		posts: state.profileReducer.posts,
		newPostText: state.profileReducer.newPostText,
		
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addPost: (post) => {dispatch(addPostActionCreator(post))},
		onPostChange: (text) => {dispatch(onPostChangeActionCreator(text))}
	}
}
const MyPostContainer = connect (mapStateToProps,mapDispatchToProps)(MyPosts);

export default MyPostContainer;