import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom"

function SideBar() {
  const [searchParams, setSearchParams] = useSearchParams()
  const initialCategory = searchParams.getAll("category")
  const initialOrder = searchParams.get("order")
  const initialPage =+searchParams.get("page")
  const [category, setCategory] = useState(initialCategory || [])
  const [ order, setOrder]= useState( initialOrder||"")
  const [page, setPage]= useState(initialPage||1)
  const handleChange = (e) => {
    // console.log(e.target.value)
    let newCategory = [...category]
    const value = e.target.value;
    if (newCategory.includes(value)) {
      newCategory = newCategory.filter((el) => el !== value)
    } else {
      newCategory.push(value);
    }
    setCategory(newCategory)
    // console.log(category)
  }
  const handleSort=(e)=>{
    setOrder(e.target.value)
  }
  useEffect(() => {
    let params = {
      category,
      // category =[male,female,kids]
    }
    order&& (params.order=order)
    setSearchParams(params)
    // console.log(searchParams.getAll("category"))
  }, [category,order])
  return (
    <div>
      <h3>Filter By</h3>
      <div>
        <input type="checkbox" value={"male"} onChange={handleChange} checked={category.includes("male")} />
        <label>Men</label>
      </div>
      <div>
        <input type="checkbox" value={"female"} onChange={handleChange} checked={category.includes("female")} />
        <label>Women</label>
      </div>
      <div>
        <input type="checkbox" value={"kids"} onChange={handleChange} checked={category.includes("kids")} />
        <label>Kids</label>
      </div>
      <br />
      <br />
      <h3>Sort Based on Price</h3>
      <div onChange={handleSort}>
        <input type="radio" name="order" value={"asc"} defaultChecked={order==="asc"} />
        <label>Ascending</label>
        <input type="radio" name="order" value={"desc"} defaultChecked={order==="desc"}/>
        <label>Descending</label>
      </div>
    </div>
  )
}

export default SideBar