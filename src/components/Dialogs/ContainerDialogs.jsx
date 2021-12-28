import Dialogs from './Dialogs';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from './../../redux/dialogsReducer'; 
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessage: (body) => {
            dispatch(updateNewMessageTextActionCreator(body))
        },

    }
}

const ContainerDialogs = connect(mapStateToProps, mapDispatchToProps)(Dialogs); 

export default ContainerDialogs;