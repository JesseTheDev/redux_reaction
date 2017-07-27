const networkActivity = (state = [], action) => {
    switch (action.type) {
        case 'GET_NETWORK_ACTIVITY':
            console.log('in reducer')
            return action.data

        default:
            return state
    }
}

export default networkActivity