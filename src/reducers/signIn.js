const signIn = (state = [], action) => {
  switch (action.type) {
    case 'SIGN_IN':
        console.log(state, 'state in reducer')
        console.log(action, 'action in reducer')
    //   return [
    //     ...state,
    //     {
    //       id: action.id,
    //       text: action.text,
    //       completed: false
    //     }
    //   ]
    default:
      return state
  }
}

export default signIn
