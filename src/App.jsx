// import { useState } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ProtectedRoute from "./components/ProtectedRoute.jsx";
// import { useAuth } from "./components/GoogleAuthProvider.jsx";
// import Home from "./components/pages/Home.jsx";
// import Navbar from "./components/Navbar.jsx";
// import Males from "./components/pages/Males.jsx";
// import Females from "./components/pages/Females.jsx";
// import Puppies from "./components/pages/Puppies.jsx";
// import PastLitters from "./components/pages/PastLitters.jsx";
// import Gallery from "./components/pages/Gallery.jsx";
// import Contact from "./components/pages/Contact.jsx";
// import Application from "./components/Application.jsx";
// import Footer from "./components/Footer.jsx";
// import About from "./components/pages/About.jsx";
// import Licenses from "./components/Licenses.jsx";
// import Login from "./components/Login.jsx";
// import Dashboard from "./components/Dashboard.jsx";
// import DogDetails from "./components/DogDetails.jsx";
// import { dogs } from "./assets/dogs.js";
// import UnAuth from "./components/pages/UnAuth.jsx";

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const { user, login, logout } = useAuth();

//   const handleDogClick = (dog) => {
//     localStorage.setItem("selectedDog", JSON.stringify(dog));
//     JSON.parse(localStorage.getItem("selectedDog"));
//     window.scrollTo(0, 0);
//   };

//   function toggleLogin(e) {
//     e.preventDefault();
//     console.log("isloggedIn value: " + isLoggedIn);
//     setIsLoggedIn((prevLoggedIn) => !prevLoggedIn);
//   }

//   return (
//     <Router>
//       <div className="bg-stone-300 min-h-screen min-w-screen flex flex-col">
//         <div className="flex flex-grow flex-col">
//           <Navbar user={user} login={login} logout={logout} />
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route
//               path="/males"
//               element={<Males handleDogClick={handleDogClick} dogs={dogs} />}
//             />
//             <Route
//               path="/females"
//               element={<Females handleDogClick={handleDogClick} dogs={dogs} />}
//             />
//             <Route
//               path="/puppies"
//               element={<Puppies handleDogClick={handleDogClick} dogs={dogs} />}
//             />
//             <Route path="/pastLitters" element={<PastLitters />} />
//             <Route path="/gallery" element={<Gallery />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/application" element={<Application dogs={dogs} />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/unauth" element={<UnAuth />} />
//             <Route path="/details/:id" element={<DogDetails />} />
//             <Route
//               path="/dashboard"
//               element={
//                 <ProtectedRoute />
//               }
//             >
//               <Route path="" element={<Dashboard />} />
//             </Route>
//           </Routes>
//         </div>
//         <Licenses />

//         <Footer />
//       </div>
//     </Router>
//   );
// }

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import { dogs } from "./assets/dogs.js";

export default function App() {
  const handleDogClick = (dog) => {
    localStorage.setItem("selectedDog", JSON.stringify(dog));
    JSON.parse(localStorage.getItem("selectedDog"));
    window.scrollTo(0, 0);
  };

  return (
    <AppProvider>
      <Router>
        <div className="bg-stone-300 min-h-screen min-w-screen flex flex-col">
          <div className="flex flex-grow flex-col">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/males"
                element={<Males handleDogClick={handleDogClick} dogs={dogs} />}
              />
              <Route
                path="/females"
                element={
                  <Females handleDogClick={handleDogClick} dogs={dogs} />
                }
              />
              <Route
                path="/puppies"
                element={
                  <Puppies handleDogClick={handleDogClick} dogs={dogs} />
                }
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
              <Route path="/dashboard" element={<ProtectedRoute />}>
                <Route path="" element={<Dashboard />} />
              </Route>
            </Routes>
          </div>
          <Licenses />
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}
