import MyPosts from '../MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './../MyPosts/MyPostContainer';
function Profile(props) {

	return (
		<section className={s.profile}>
			<ProfileInfo />
			<MyPostContainer store={props.store}/>
		</section>
	);
}

export default Profile;