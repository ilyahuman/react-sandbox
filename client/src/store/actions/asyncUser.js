import {
    signInRequest,
    signInSuccess,
    signInFailure,
    setUser,
    setToken,
    signOut
} from './user'

export const asyncSignIn = ({email, password}) => async dispatch => {
    dispatch(signInRequest());

    try {
        const response = await fetch('/user/signin', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        });

        const data = await response.json();

        if (data.token) {
            await dispatch(asyncSetToken(data.token));
            dispatch(signInSuccess(data));
        }
    } catch (e) {
        dispatch(signInFailure());
    }
}

export const asyncSignOut = () => async dispatch => {
    try {
        localStorage.removeItem('token');
        dispatch(signOut());
    } catch (e) {
        console.log(e)
    }
}

export const asyncGetUser = () => async dispatch => {
    try {
        const token = await localStorage.getItem('token');

        if (!token) {
            throw new Error('You need to auth');
        }

        const response = await fetch('/user/get-user', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'authorization': `Bearer ${token}`
            }
        });

        const data = await response.json();

        if (data.expired) {
            dispatch(asyncSignOut());
        }

        if (data.user) {
            dispatch(setUser(data))
        }
    } catch (e) {
        console.log(e)
    }
}

export const asyncSetToken = (token) => async dispatch => {
    await localStorage.setItem('token', token);
    dispatch(setToken(token));
}