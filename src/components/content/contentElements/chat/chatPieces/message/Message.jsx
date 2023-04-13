import './Message.css'

const Message = (props) => {

    let messageClassesArray = ['message']

    if (props.message.sender === 'you') {
        messageClassesArray.push('yourMessage')
    }

    else {
        messageClassesArray.push('companionMessage')
    }

    const messageClasses = messageClassesArray.join(' ')

    return (
        <div className='messageContainer'>
            <div className={messageClasses}>
                <div className='messageText'>
                    {props.message.text}
                </div>
                <div className='messageTime'>
                    {props.message.time}
                </div>
            </div>
        </div>
    );
}

export default Message;