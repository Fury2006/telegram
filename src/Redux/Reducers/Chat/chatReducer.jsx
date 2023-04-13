const updateNewMessage = 'updateNewMessage'
const sendMessage = 'sendMessage'

const time = () => {
    const date = new Date()

    let hours = date.getHours()
    let minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`

    if (hours > 12) {
        hours -= 12
        hours = hours > 9 ? hours : `0${hours}`
        return `${hours}:${minutes} PM`
    }

    hours = hours > 9 ? hours : `0${hours}`

    return `${hours}:${minutes} AM`
}


const initialState = {
    messages: [{ text: 'hello', time: time(), sender: 'you' },
    { text: 'How are you', time: time(), sender: 'Oksana' }],
    newMessageText: ''
}

const chatReducer = (state = initialState, action) => {

    const newState = Object.assign({}, state)

    switch (action.type) {
        case updateNewMessage:
            newState.newMessageText = action.text
            break;

        case sendMessage:
            newState.newMessageText && newState.messages.push({
                text: newState.newMessageText,
                time: time(),
                sender: 'you'
            })

            newState.newMessageText = ''
            break;

    }

    return newState
}

export const updateNewMesageTextAction = (newMessageText) => ({ type: updateNewMessage, text: newMessageText })
export const sendMessageActionCreator = () => ({ type: sendMessage })

export default chatReducer;