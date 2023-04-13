import ChatContainer from '../../content/contentElements/chat/chatBody/ChatContainer';
import DialogsContainer from '../navigation/DialogsNavigation/DialogsBody/DialogsContainer'
import s from './Main.module.css'

const Main = (props) => {
    return (
        <div className={s.main}> 
            <DialogsContainer />
            <ChatContainer />
        </div>
    );
}

export default Main;