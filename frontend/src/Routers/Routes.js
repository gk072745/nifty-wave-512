import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Homepage/Home'
import Mainnav from '../Homepage/mainnavbar/Navbar1'
import SearchNav from '../Homepage/mainnavbar/Search'
import Topnavbar from '../Homepage/navbar/topnav'
import Navbardrop from '../Homepage/newnavbar/nav3'
import Address from '../Pages/Address'
import AllPages from '../Pages/AllPages/AllPages'
import Login from '../Pages/login/Login'
import SignupCard from '../Pages/login/userSignup'
import SingleProductPage from '../Pages/SingleProductPage'
const MainRoute = () => {
  return (
    <Routes>
         <Route path='/' element={
          <>
          <Topnavbar/>
          <Mainnav/>
          <SearchNav/>
          <Navbardrop/>
          <Home />
          </>

         }/>
         <Route path="/product/:category?" element={
          <>
          <Topnavbar/>
          <Mainnav/>
          <SearchNav/>
          <Navbardrop/>
          <AllPages/>
          </>
          }  />
         <Route path="/singleproduct/:id" element={
          <>
          <Topnavbar/>
          <Mainnav/>
          <SearchNav/>
          <Navbardrop/>
          <SingleProductPage/>
          </>
          } />
         <Route path='/login' element={
          <>
          <Topnavbar/>
          <Mainnav/>
          <SearchNav/>
          <Navbardrop/>
          <Login/>
          </>
          } />
         <Route path='/signup' element={
          <>
          <Topnavbar/>
          <Mainnav/>
          <SearchNav/>
          <Navbardrop/>
          <SignupCard/>
          </>
        } />
         <Route path='/address' element={
          <>
     
            <Address/>
  
          </>
        } />
    </Routes>
  )
}

export default MainRoute