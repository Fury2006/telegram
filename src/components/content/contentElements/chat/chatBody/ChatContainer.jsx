import { sendMessageActionCreator, updateNewMesageTextAction } from "../../../../../Redux/Reducers/Chat/chatReducer";
import Chat from "./Chat";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return {
        newMessageText: state.Chat.newMessageText,
        messages: state.Chat.messages,
        dialogName: state.Dialogs[0].name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessage: (newText) => {
            dispatch(updateNewMesageTextAction(newText))
        },

        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        }
    }
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat)

export default ChatContainer;