import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
function Navbar() {
  return (
    <DIV>
        <h3>Shopping App</h3>
        <Link to={'/'}><p className='navlink'>HOME</p></Link>
        <Link to={"/login"}> <p className='navlink'>LOG IN</p></Link>
        <Link to={"/admin"}><p className='navlink'>ADMIN</p></Link>
    </DIV>
  )
}
export default Navbar
const DIV= styled.div`
     display:flex;
     align-items:center;
     gap:20px;
     border:1px solid grey;
     background-color:#65a4d0;
     /* color:white; */
     .navlink{
      color:#1e5d8a;
      font-size:1.2rem;
    
     }
`;