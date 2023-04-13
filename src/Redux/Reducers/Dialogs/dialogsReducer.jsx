const updateSearch = 'updateSearch'

const initialState = [
    {
        name: 'Сергей Ананьев',
        path: '/sergiy',
        avatar: '../images/avatar.jpg',
        searchText: ''
    }
]

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case updateSearch:
            state.searchText = action.text
            break;
    }

    return state

}

export const updateSearchAction = (text) => ({ type: updateSearch, text: text })

export default dialogsReducer;