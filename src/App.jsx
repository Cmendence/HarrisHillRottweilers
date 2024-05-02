import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx"
import Navbar from './components/Navbar.jsx'
import Males from './components/Males.jsx'
import Females from './components/Females.jsx'
import Puppies from './components/Puppies.jsx'
import PastLitters from './components/PastLitters.jsx'
import Gallery from './components/Gallery.jsx'
import Contact from './components/Contact.jsx'
import Application from './components/Application.jsx'
import Footer from './components/Footer.jsx';

export default function App() {
   return (
   <Router>
      <div className='bg-slate-300 min-h-screen min-w-screen'>
      
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
   <Footer />
      </div>
      </Router>
   )
 }
