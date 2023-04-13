import s from './Send.module.css'

const Send = (props) => {

    const updateNewMessage = (event) => {
        const text = event.target.value
        props.updateNewMessage(text)
    }

    const sendMessage = () => {
        props.sendMessage()
    }

    const onEnterClick = (keyName) => {
        if (keyName.code === 'Enter') {
            sendMessage()
        }
    }

    return ( 
        <div className={s.send}>
                    <div>
                        <input
                            className={s.input}
                            placeholder="Write a message..."
                            value={props.newMessageText}
                            onChange={updateNewMessage}
                            onKeyUp={onEnterClick}
                            autoCorrect='off' />
                    </div>
                    <div
                        className={s.sendButton}
                        onClick={sendMessage}>

                        <img src="./images/send.png" draggable='false' />

                    </div>
                </div>
     );
}
 
export default Send;