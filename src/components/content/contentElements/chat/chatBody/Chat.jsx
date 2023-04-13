import React from "react";
import Message from "../chatPieces/message/Message";
import s from './Chat.module.css'
import Send from "../chatPieces/send/Send";

const Chat = (props) => {

    return (
        <div className={s.chatContainer}>
            <div className={s.title}>
                {props.dialogName}
            </div>
            <div className={s.messages}>
                <div className={s.flexbox}>
                    {props.messages.map(message => <Message message={message} />)}
                </div>
            </div>
            <div>
                <Send
                    newMessageText={props.newMessageText}
                    sendMessage={props.sendMessage}
                    updateNewMessage={props.updateNewMessage} />
            </div>
        </div>
    );
}

export default Chat;