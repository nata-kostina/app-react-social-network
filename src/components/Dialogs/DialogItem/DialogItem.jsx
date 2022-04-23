import s from "./DialogItem.module.css"
import { NavLink } from "react-router-dom"

const DialogItem = (props) => {
	return (
		<NavLink to={'/dialogs/' + props.id}>
		<div className={s.dialog}>
					{props.name}			
				</div>
		</NavLink>
	)
}

export default DialogItem;