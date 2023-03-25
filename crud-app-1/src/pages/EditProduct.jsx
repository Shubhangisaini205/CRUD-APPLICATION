import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { editProduct } from '../redux/productReducer/action';
function EditProduct() {
  const [ data, setData] = useState({})
  const [success, setSuccess]= useState(false)
  const {id}= useParams();
  const product = useSelector((store)=>store.productReducer.products)
  const dispatch = useDispatch()
  const handlechange=(e)=>{
   const {name,value}= e.target
   setData((prev)=>{ return {...prev, [name]:value}})
  }
  const handleEdit =(e)=>{
    e.preventDefault();
    // console.log(data)
    dispatch(editProduct(data,id)).then(()=>setSuccess(true))
  }
  useEffect(()=>{
  const data = product.find((el)=>el.id===+id)
  console.log(data)
  setData(data)
  },[])
  return (
    <DIV>
      <h3>EDIT PRODUCT: {id}</h3>
      <h2>{success&&"Product Edit Successfully"}</h2>
      <form onSubmit={handleEdit}>
        <input type="text" name={'image'} value={data.image} 
        onChange={(e)=>handlechange(e)}/>
        <input type="text" name={'title'} value={data.title}
        onChange={(e)=>handlechange(e)}/>
        <input type="number" name={'price'} value={data.price}
        onChange={(e)=>handlechange(e)}/>
        <input type="text" name={'brand'} value={data.brand}
        onChange={(e)=>handlechange(e)}/>
        <input type="text" name={'discount'} value={data.discount}
        onChange={(e)=>handlechange(e)}/>
        <select
          name="gender"
          value={data.gender}
          onChange={(e)=>handlechange(e)}
        >
          <option value="">Select Gender</option>
          <option value="male">Men</option>
          <option value="female">Women</option>
          <option value="kids">Kids</option>
        </select>
        <button type='submit'>Edit</button>
      </form>
    </DIV>
  )
}

export default EditProduct

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
h2{
  color:green;
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