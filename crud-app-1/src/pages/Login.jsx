import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation,useNavigate } from 'react-router-dom';
import styled from "styled-components"
import { login } from '../redux/authReducer/action';


function Login() {
   
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const { auth } = useSelector((store) => store.authReducer)
    const navigate = useNavigate()
    const location = useLocation();
    // console.log(location)
    const handleLogin = (e) => {
        e.preventDefault()
        const userData = {
            email, password
        }
        dispatch(login(userData)).then(()=>{
 navigate(location.state,{replace:true})
        })
        setEmail("");
        setPassword("")
      
    }
    return (
        <DIV auth={auth}>
            <h1>USER LOGIN</h1>
            <h3>{auth ? "Login Successfull!!" : "Login To Conitnue.."}</h3>
            <form className='form-1' onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder='Enter Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <input
                    type="password"
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <button
                    type="submit"
                > Log In</button>
            </form>
        </DIV>
    )
}

export default Login

const DIV = styled.div`
width:400px;
margin:40px auto;
border:1px solid grey;
padding:10px;

h3{
   color:${({auth})=>auth?"green":"red"}
}

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
`;


// const FORM = styled.form`
//      display:flex;
//   flex-direction:column;
//   gap:15px;
//   align-items:center;
// `
//  for using this we need to make form as FORM

