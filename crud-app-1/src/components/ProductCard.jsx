import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
function ProductCard({ image, title, price, brand, discount, gender,id }) {
    return (<DIV>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <h3>price:{price}</h3>
        <p>Brand:{brand}</p>
        <p>Discount:{discount}</p>
        <p>Category:{gender}</p>
        <button>
            <Link to={`/edit/${id}`}> EDIT</Link>
        </button>
    </DIV>
    )
}
export default ProductCard
const DIV =styled.div`
   padding:10px;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
   width:200px;
   background-color:#65a4d0;
   img{
    height:200px;
    width:100%;
   }
`;
