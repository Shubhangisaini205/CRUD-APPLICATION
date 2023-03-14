import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <DIV>
        <h3>Shopping App</h3>
        <Link to={'/'}>HOME</Link>
        <Link to={"/login"}> Log-In</Link>
        <Link to={"/admin"}>Admin</Link>
    </DIV>
  )
}

export default Navbar

const DIV= styled.div`
     display:flex;
     align-items:center;
     gap:20px;
     border:1px solid grey;
`;