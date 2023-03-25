import React, { useState } from 'react'
import styled from 'styled-components'
import {useDispatch} from "react-redux"
import { addProduct } from '../redux/productReducer/action';

const initialState = {
    image: "",
    title: "",
    price: "",
    brand: "",
    discount: "",
    gender: "",
}
function Admin() {
    const [product, setProduct] = useState(initialState);
    
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const {name, value} = e.target
        setProduct(prev => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        // console.log(product)
        dispatch(addProduct(product))
        setProduct(initialState)
    }
    return (
        <DIV>
            <h2>ADD PRODUCT</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="image"
                    type="text"
                    value={product.image}
                    onChange={(e) => handleChange(e)}
                    placeholder='image' />

                <input
                    name="title"
                    type="text"
                    value={product.title}
                    onChange={(e) => handleChange(e)}
                    placeholder='Title' />

                <input
                    name="price"
                    type="number"
                    value={product.price}
                    onChange={(e) => handleChange(e)}
                    placeholder='Price' />

                <input
                    name="brand"
                    type="text"
                    value={product.brand}
                    onChange={(e) => handleChange(e)}
                    placeholder='Brand' />

                <input
                    name="discount"
                    type="text"
                    value={product.discount}
                    onChange={(e) => handleChange(e)}
                    placeholder='Discount' />

                <select
                    name="gender"
                    id=""
                    onChange={(e) => handleChange(e)}>
                    <option value="">Select Gender</option>
                    <option value="male">Men</option>
                    <option value="female">Women</option>
                    <option value="kids">Kids</option>
                </select>
                <button type="submit">
                    Submit
                </button>
            </form>
        </DIV>
    )
}

const DIV = styled.div`
width:400px;
margin:40px auto;
border:1px solid grey;
padding:10px;

form{
  display:flex;
  flex-direction:column;
  gap:15px;
  align-items:center;
}

input{
    width:80%;
    padding:10px;
    border-radius:10px;
    font-size:large;
}
button{
    width:20%;
    padding:10px;
    background-color:black;
    color:white;
    font-size:large;
    border-radius:10px;
}
select{
    width:50%;
    height:30px;
    font-size:large;
    border-radius:10px;
}
`;

export default Admin