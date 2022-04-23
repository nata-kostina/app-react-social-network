import axios from "axios"

const Users = (props) => {
	const getUsers = () => {
		axios
		.get('https://social-network.samuraijs.com/api/1.0/users')
		.then(data => console.log(data));
	}
	return (
		<div>
			{props.users.map(u => {
				return (
					<div>
						<div>{u.id}</div>
						<div>{u.name}</div>
						<div>{u.surname}</div>
						<div>{u.location.country}</div>
						<div>
							{u.followed
								? <button onClick = {() =>  props.unfollow(u.id)}>Unfollow</button>
								: <button onClick = {() =>  props.follow(u.id)}>Follow</button>}
						</div>
						
					</div>
				)
			})}
			<button onClick = {getUsers}>Get Users</button>
		</div>
	)
}

export default Users;