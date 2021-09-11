import { authConstants } from './constants';
import axios from '../helpers/axios';


export const login = (user) => {

    console.log(user);

    return async(dispatch) => {

        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axios.post('/admin/signin', {
            ...user 
        });

        if(res.status === 200) {
            const {token, user} = res.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            })
        }else{
            if(res.status === 400) {
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: {
                        error: res.data.message
                    }
                })
            }
        }

    };
};


export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if(token){
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        }else{
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: {
                    authenticate: false,
                    message: 'User needs to login'
                }
            })

        }
    }
};

export const signout = () => {

    return async (dispatch) => {
        console.log('req')
        dispatch({ type: authConstants.LOGOUT_REQUEST });
        console.log('req')
        const res = await axios.post('/admin/signout');
        console.log('req')
        if(res.status === 200) {
            localStorage.clear();
            dispatch({
                type: authConstants.LOGOUT_SUCCESS,
            });
        }else{
            console.log('fail');
            dispatch({
                type: authConstants.LOGOUT_FAILURE,
                payload: {
                    error: res.data.error
                }
            });
        }

        localStorage.clear();
        // dispatch({
        //     type: authConstants.LOGOUT_REQUEST
        // });
    }
}