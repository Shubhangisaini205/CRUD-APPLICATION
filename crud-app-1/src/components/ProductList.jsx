import React, { useEffect, useState } from 'react'
import { getProducts } from '../redux/productReducer/action'
import styled from "styled-components"
import { useDispatch, useSelector } from "react-redux"
import ProductCard from './ProductCard'
import { useLocation, useSearchParams } from 'react-router-dom'
function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = +searchParams.get("page")
  const { products } = useSelector((store) => store.productReducer)
  const [page, setPage] = useState(initialPage || 1)
  const dispatch = useDispatch()
  const location = useLocation();
  //   console.log(location)
  let obj = {
    params: {
      gender: searchParams.getAll("category"),
      _sort: searchParams.get("order") && "price",
      _order: searchParams.get("order"),
      _page: searchParams.get("page"),
      _limit: 8,

    }
  }
  useEffect(() => {
    dispatch(getProducts(obj))
  }, [location.search,])

  useEffect(() => {
    let params = {}
    page && (params.page = page)
    setSearchParams(params)
  }, [page])

  const handleprev = () => {
    setPage(page - 1)
  }

  const handlenext = () => {
    setPage(page + 1)
  }
  
  return (
    <DIV className='cont'>{products.length > 0 && products.map((el) => {
      return <ProductCard key={el.id} {...el} />
    })}
      <div>
        <button disabled={page === 1} onClick={handleprev}>PREV</button>
        <button>{page}</button>
        <button onClick={handlenext}>NEXT</button>
      </div>

    </DIV>

  )
}

export default ProductList

const DIV = styled.div`

margin:40px auto;
margin-left:30px;
display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;
@media (max-width: 768px) {
  grid-template-columns:repeat(2,1fr);
}
@media (max-width: 425px) {
  grid-template-columns:repeat(1,1fr);
}

`;