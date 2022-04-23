import s from './Friends.module.css'

const Friends = (props) => {
	
	const friends = props.friends.map (item => {
		return (
			<div>{item.name}</div>
		)
	})
	return (
		<div className={s.friends}>
		<div className={s.friends__inner}>
			<h3>Friends</h3>
			<div>
				{friends}
			</div>
		</div>
	</div>
	)
}

export default Friends;