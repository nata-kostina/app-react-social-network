import s from './NavBar.module.css'
import '../../assets/icofont/icofont.module.css'
import { Link, NavLink } from "react-router-dom";
import Friends from '../Friends/Friends';

function NavBar(props) {
	return (
		<nav className={s.nav}>
			<div className={s.nav__inner}>
				<ul>
					<li>							
						<NavLink to="/profile" className={({ isActive }) => isActive ? `${s.active}` : ''}><i className={s['icofont-panda-face']}></i>Profile</NavLink>
					</li>
					<li>
						<NavLink to="/dialogs" className={({ isActive }) => isActive ? `${s.active}` : ''}>
							<i className={s['icofont-ui-message']}></i>
							Messages</NavLink></li>
					<li>
						<NavLink to="/news" className={({ isActive }) => isActive ? `${s.active}` : ''}>	<i className={s['icofont-newspaper']}></i>News</NavLink>
					</li>
					<li>					
						<NavLink to="/music" className={({ isActive }) => isActive ? `${s.active}` : ''}>	<i className={s['icofont-music']}></i>Music</NavLink>
					</li>
					<li>						
						<NavLink to="/settings" className={({ isActive }) => isActive ? `${s.active}` : ''}><i className={s['icofont-settings']}></i>Settings</NavLink>
					</li>
					<li>						
						<NavLink to="/users" className={({ isActive }) => isActive ? `${s.active}` : ''}><i className={s['icofont-users-social']}></i>Users</NavLink>
					</li>
				</ul>
				<Friends friends={props.store.getState().sidebarReducer.friends} />
			</div>
		</nav>
	);
}

export default NavBar;