import { Link } from "react-router-dom";
import s from './Dialog.module.css'

const Dialog = (props) => {

    let lastMessageSender = ''

    if (props.lastMessage.sender !== 'you') {
        lastMessageSender = props.lastMessage.sender + ':'
    }

    return (
        <div className={s.dialog}>
            <Link to={props.dialog.path}>
                <div className={s.firstSection}>
                    <div className={s.image} >
                        <img src={props.dialog.avatar} />
                    </div>
                    <div className={s.textSection} >
                        <div className={s.name}>
                            {props.dialog.name}
                        </div>
                        <div className={s.lastMessage}>
                            {
                                lastMessageSender && <div className={s.sender}>
                                    {lastMessageSender}
                                </div>
                            }
                            <div className={s.senderMessageText}>
                                {props.lastMessage.text}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.secondSection}>
                    <div className={s.time}>
                        {props.lastMessage.time}
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Dialog;