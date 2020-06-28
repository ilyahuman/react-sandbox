export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';
export const SET_USER = 'SET_USER';
export const SET_TOKEN = 'SET_TOKEN';
export const SIGN_OUT = 'SIGN_OUT';

export const signInRequest = () => {
    return {
        type: SIGN_IN_REQUEST
    }
}

export const signInSuccess = (data) => {
    return {
        type: SIGN_IN_SUCCESS,
        payload: data
    }
}

export const signInFailure = () => {
    return {
        type: SIGN_IN_FAILURE,
        error: 'Something went wrong'
    }
}

export const setUser = (data) => {
    return {
        type: SET_USER,
        payload: data
    }
}

export const setToken = (data) => {
    return {
        type: SET_TOKEN,
        payload: data
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}