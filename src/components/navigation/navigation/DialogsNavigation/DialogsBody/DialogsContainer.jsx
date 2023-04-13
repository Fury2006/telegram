import { connect } from "react-redux";
import { updateSearchAction } from "../../../../../Redux/Reducers/Dialogs/dialogsReducer";

import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {

    const messages = state.Chat.messages

    const lastMessage = messages.slice(-1)[0]


    return {
        dialogs: state.Dialogs,
        lastMessage: lastMessage 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateSearch: (text) => {
            dispatch(updateSearchAction(text))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;