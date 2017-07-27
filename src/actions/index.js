export const signIn = (email, password) => ({
    type: 'SIGN_IN',
    email,
    password
})

export const getActivity = () => ({
    type: 'GET_NETWORK_ACTIVITY',
    data: ['a','b','c','d']
})