import {
    SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SET_USER,
    SET_TOKEN,
    SIGN_OUT
} from '../actions/user';

const storage = window.localStorage;

const isSignedIn = () => !!storage.getItem('token');

const initialState = {
    username: '',
    email: '',
    user_pic: '',
    loading: false,
    isSignedIn: isSignedIn(),
    token: null,
    error: ''
}

console.log(initialState)

export const userReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SIGN_IN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case SIGN_IN_FAILURE:
            return {
                ...state,
                loading: false,
                error: 'Something went wrong'
            }
        case SET_USER:
            return {
                ...state,
                username: payload.user.name,
                email: payload.user.email,
                user_pic: 'https://randomuser.me/api/portraits/men/57.jpg'

            }
        case SET_TOKEN:
            return {
                ...state,
                isSignedIn: true,
                token: payload.token
            }
        case SIGN_OUT:
            return {
                ...initialState,
                token: null,
                isSignedIn: false
            }
        default:
            return state;
    }
}
