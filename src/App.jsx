import {
   BrowserRouter as Router,
   Routes,
   Route,
   Navigate,
 } from "react-router-dom";
 import ProtectedRoute from "./components/ProtectedRoute.jsx";
 import AppProvider from "./components/GoogleAuthProvider.jsx";
 import Home from "./components/pages/Home.jsx";
 import Navbar from "./components/Navbar.jsx";
 import Males from "./components/pages/Males.jsx";
 import Females from "./components/pages/Females.jsx";
 import Puppies from "./components/pages/Puppies.jsx";
 import PastLitters from "./components/pages/PastLitters.jsx";
 import Gallery from "./components/pages/Gallery.jsx";
 import Contact from "./components/pages/Contact.jsx";
 import Application from "./components/Application.jsx";
 import Footer from "./components/Footer.jsx";
 import About from "./components/pages/About.jsx";
 import Licenses from "./components/Licenses.jsx";
 import Login from "./components/Login.jsx";
 import Dashboard from "./components/Dashboard.jsx";
 import DogDetails from "./components/DogDetails.jsx";
 import UnAuth from "./components/pages/UnAuth.jsx";
 import { DataProvider } from "./components/useData.jsx"; // Import the DataContext provider
 import { dogs } from "./assets/dogs.js";
 import EditGallery from "./components/pages/EditGallery.jsx";
 import EditPastLitters from "./components/pages/EditPastLitters.jsx";
 
 export default function App() {
   const handleDogClick = (dog) => {
     localStorage.setItem("selectedDog", JSON.stringify(dog));
     JSON.parse(localStorage.getItem("selectedDog"));
     window.scrollTo(0, 0);
   };
 
   return (
     <AppProvider>
       <DataProvider>
         <Router>
           <div className="bg-stone-300 min-h-screen min-w-screen flex flex-col">
             <div className="flex flex-grow flex-col">
               <Navbar />
               <Routes>
                 <Route path="/" element={<Home />} />
                 <Route
                   path="/males"
                   element={<Males handleDogClick={handleDogClick} />}
                 />
                 <Route
                   path="/females"
                   element={<Females handleDogClick={handleDogClick} />}
                 />
                 <Route
                   path="/puppies"
                   element={<Puppies handleDogClick={handleDogClick} />}
                 />
                 <Route path="/pastLitters" element={<PastLitters />} />
                 <Route path="/gallery" element={<Gallery />} />
                 <Route path="/contact" element={<Contact />} />
                 <Route
                   path="/application"
                   element={<Application dogs={dogs} />}
                 />
                 <Route path="/about" element={<About />} />
                 <Route path="/login" element={<Login />} />
                 <Route path="/unauth" element={<UnAuth />} />
                 <Route path="/details/:id" element={<DogDetails />} />
                 <Route path="/admin" element={<ProtectedRoute />}>
                   <Route index element={<Navigate to="dashboard" />} />
                   <Route path="dashboard" element={<Dashboard />} />
                   <Route
                     path="dashboard/editGallery"
                     element={<EditGallery />}
                   />
                   <Route
                     path="dashboard/editPastLitters"
                     element={<EditPastLitters />}
                   />
                 </Route>
               </Routes>
             </div>
             <Licenses />
             <Footer />
           </div>
         </Router>
       </DataProvider>
     </AppProvider>
   );
 }
 