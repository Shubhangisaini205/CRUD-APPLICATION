import axios from "axios";
import { PRODUCT_FAILURE, PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, EDIT_PRODUCT_SUCCESS } from "./actionTypes";

export const addProduct = (data) => (dispatch) => {
   dispatch({ type: PRODUCT_REQUEST })
   axios.post("http://localhost:8080/products", data).then(() => {
      dispatch({ type: ADD_PRODUCT_SUCCESS, })
   }).catch((err) => {
      dispatch({ type: PRODUCT_FAILURE })
   })
}


export const  getProducts=(paramobj)=> (dispatch)=>{
 dispatch({type:PRODUCT_REQUEST})
 axios.get(`http://localhost:8080/products`,paramobj).then((res)=>dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})).catch((err)=>dispatch({type:PRODUCT_FAILURE}))
}



export const editProduct =(dataobj,id) => (dispatch) => {
   dispatch({ type: PRODUCT_REQUEST })
  return axios.patch(`http://localhost:8080/products/${id}`, dataobj).then(() => {
      dispatch({ type: EDIT_PRODUCT_SUCCESS, })
   }).catch((err) => {
      dispatch({ type: PRODUCT_FAILURE })
   })
}