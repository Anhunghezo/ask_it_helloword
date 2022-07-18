const initState = {
    users: [
        { id: 1, name: 'Eric' },
        { id: 2, name: 'kHuynh' },
        { id: 3, name: 'kHuynh A1K15' },
    ],
    posts: []
}
const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users
            console.log("run into delete User: ", action)
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            }

        case "CREATE_USER":
            let id = Math.floor(Math.random() * 1000)
            let user = {
                id: id,
                name: `Random userName ${id}`
            }
            return {
                ...state, users: [...state.users, user]
            }
        default:
            return state
    }

}

export default rootReducer