import s from './Header.module.css'
import Logo from "../../assets/logo.png"
function Header() {
	return (
		<header className={s.header}>
			<div class="container">
				<div className={`${s.header__inner} ${s.test}`}>
					<a href="#" className={s.logo} >					
						<img className={s.logo__img} src={`${Logo}`} alt="logo" />
						<span>Vbesede</span>
					</a>
				</div>
			</div>
		</header>
	);
}

export default Header;