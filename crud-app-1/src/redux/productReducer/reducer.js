import { PRODUCT_FAILURE, PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, EDIT_PRODUCT_SUCCESS } from "./actionTypes"

const initstate = {
    isLoading: false,
    isError: false,
    products: []
}

export const reducer = (state = initstate, { type, payload }) => {
    switch (type) {

        case PRODUCT_REQUEST:
            return { ...state, isLoading: true }
        case ADD_PRODUCT_SUCCESS:
            return { ...state, isLoading: false }
        case PRODUCT_FAILURE:
            return { ...state, isLoading: false, isError: true }
        case GET_PRODUCT_SUCCESS:
            return { ...state, isLoading: false, products: payload }
        case EDIT_PRODUCT_SUCCESS:
            return { ...state, isLoading: false }

        default: return state
    }

}