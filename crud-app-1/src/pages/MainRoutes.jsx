import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../components/PrivateRoute'
import Admin from './Admin'
import HomePage from './HomePage'
import Login from './Login'
import EditProduct from "./EditProduct"

function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/admin" element ={<PrivateRoute><Admin/></PrivateRoute>}/>
        <Route path="/edit/:id" element ={<PrivateRoute><EditProduct/></PrivateRoute>}/>
        <Route path="*" element = {<h1>404 Page Not Found</h1>}/>
    </Routes>
  )
}

export default MainRoutes