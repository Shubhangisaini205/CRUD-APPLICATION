import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./actiontypes"

const initstate = {
    isLoading: false,
    isError: false,
    auth: false,
    token: ""
}

export const reducer = (state = initstate, { type, payload }) => {

    switch (type) {

        case LOGIN_REQUEST: return { ...state, isLoading: true }

        case LOGIN_SUCCESS: return { ...state, isLoading: false, auth: true, token: payload }

        case LOGIN_FAILURE: return { ...state, isLoading: false, isError: true }

        default: return state
    }

}