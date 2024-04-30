import { useState } from 'react'
import './App.css'
import { Routes, Route, Router } from 'react-router-dom'
import Home from "./components/Home"
import Navbar from './components/Navbar'

export default function App() {
   return (
      <>
      
         <Navbar />
      <Routes>
         <Route path='/' element={<Home />} />
      </Routes>
   
      </>
   )
 }
