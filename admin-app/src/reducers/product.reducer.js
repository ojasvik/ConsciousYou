const initState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: '',
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: null,
    message: ''
};

const productReducer = (state = initState, action) => {
    switch (action.type) {
        default:
            break;
    }
    return state;
};

export default productReducer;