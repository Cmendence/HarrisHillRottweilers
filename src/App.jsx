import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import Navbar from './components/Navbar'
import Males from './components/Males'
import Females from './components/Females'
import Puppies from './components/Puppies'
import PastLitters from './components/PastLitters'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Application from './components/Application'

export default function App() {
   return (
   <Router>
      <div className='bg-slate-300 h-screen w-screen'>
      
         <Navbar />
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/males' element={<Males />} />
         <Route path='/females' element={<Females />} />
         <Route path='/puppies' element={<Puppies />} />
         <Route path='/pastLitters' element={<PastLitters />} />
         <Route path='/gallery' element={<Gallery />} />
         <Route path='/contact' element={<Contact />} />
         <Route path='/application' element={<Application />} />
      </Routes>
   
      </div>
      </Router>
   )
 }
