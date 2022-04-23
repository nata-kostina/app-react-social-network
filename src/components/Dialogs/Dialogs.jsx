
import s from "./Dialogs.module.css"
import DialogItem from './DialogItem/DialogItem';
import Message from "./Message/Message";
import { onSendMessageActionCreator } from "../../redux/dialog-reducer";
import { changeMessageActionCreator } from './../../redux/dialog-reducer';


const Dialogs = (props) => {
	
	let state = props.dialogReducer;
	const messagesElements = state.messages.map(item => {
		return <Message message={item.message} id={item.id} />
	});

	const dialogsElements = state.dialogs.map(item => {
		return <DialogItem name={item.name} id={item.id} />
	});
	const onClickMessage = () => {
		props.onClickMessage();		
	}

	const onChangeMessage = (e) => {		
			let message = e.target.value;
		props.onChangeMessage(message);
	}
	return (
		<div>
			<div className={s.dialog__inner}>
				<div className={s.dialogs}>
					<div className={s.dialogItems}>
						{dialogsElements}
					</div>
				</div>
				<div className={s.messages}>
					{messagesElements}
				</div>
			</div>

			<textarea name="" id="" onChange={onChangeMessage} value = {state.newMessageBody}></textarea>
			<input type="submit" value="Submit" onClick={onClickMessage} />
		</div>
	)
}

export default Dialogs;