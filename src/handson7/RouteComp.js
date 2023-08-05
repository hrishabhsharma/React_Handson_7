import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Student from './Student'
import Contactus from './Contactus'
import AddNewStudent from './AddNewStudent'
import EditStudent from './EditStudent'
import './style.css'

const RouteComp = () => {
  return (
    <>
    <BrowserRouter>
    <div className='header'>
      <NavLink to='/' className='tag'>Home</NavLink>
      <NavLink to='/Student' className='tag'>Student</NavLink>
      <NavLink to='/ContactUs' className='tag'>Contact</NavLink>
    </div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Student' element={<Student/>}/>
      <Route path='/Contactus' element={<Contactus/>} />
      <Route path='/AddStudent' element={<AddNewStudent/>} />
      <Route path='/Student/:id' element={<EditStudent/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouteComp