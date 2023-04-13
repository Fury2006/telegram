import { legacy_createStore as createStore, combineReducers } from 'redux';
import chatReducer from '../Reducers/Chat/chatReducer';
import dialogsReducer from '../Reducers/Dialogs/dialogsReducer';

const reducers = combineReducers({
    Chat: chatReducer,
    Dialogs: dialogsReducer
})

const Store = createStore(reducers)

export default Store;