import React from 'react'
import {Home} from './comp/Home'
import {Navbar} from './comp/Navbar'
import AddUser from './user/AddUser'
import EditUser from './user/EditUser'
import User from './user/User'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  
  return (
  <>
  <BrowserRouter>
   <Navbar/>
      <Routes>
  
          <Route path="/" element={<Home />} />
          <Route path="/users/add" element={<AddUser/>} />

           <Route path="/users/edit/:id" element={<EditUser/>} />
          <Route path="/user/:id" element={<User/>} />
        
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
