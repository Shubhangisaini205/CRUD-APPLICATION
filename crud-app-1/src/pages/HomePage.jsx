import React from 'react'
import styled from 'styled-components'
import ProductList from '../components/ProductList'
import SideBar from '../components/SideBar'

function HomePage() {
  return (
    <DIV>
      <div className='sidebar'>
        <SideBar />
      </div>
      <div className='productlist'>
        <ProductList />
      </div>

    </DIV>
  )
}

export default HomePage
const DIV = styled.div`
  display:flex;
   
   .sidebar{
    width:15%;
    border:1px solid gray;
    padding:20px;
   background-color:#65a4d0;
   }
   .productlist{
    width:85%;
   }
`;