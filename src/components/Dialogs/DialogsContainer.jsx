

import { connect } from "react-redux";
import { onSendMessageActionCreator } from "../../redux/dialog-reducer";
import { changeMessageActionCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';


const mapStateToProps = (state) => {
	
	return {
		dialogReducer: state.dialogReducer
	}
}

const mapDispatchToProps = (dispatch) => {

return {
	onClickMessage: () => {
		dispatch(onSendMessageActionCreator());
	},

	onChangeMessage: (message) => {				
		dispatch(changeMessageActionCreator(message))
	}
}
}

const SuperDialogContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default SuperDialogContainer;
//export default DialogsContainer;