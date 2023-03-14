import { ADD_PRODUCT_FAILURE, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS } from "./actionTypes"

const initstate = {
    isLoading: false,
    isError: false,
    products:[]
}

export const reducer = (state = initstate, { type, payload }) => {
    switch (type) {

       case ADD_PRODUCT_REQUEST:
        return {...state, isLoading: true}
        case ADD_PRODUCT_SUCCESS:
        return {...state, isLoading: false}
        case ADD_PRODUCT_FAILURE:
        return {...state, isLoading: false, isError:true}
      
        default: return state
    }

}