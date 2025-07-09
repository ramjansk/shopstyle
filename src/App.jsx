import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import AboutUs from './pages/aboutus/AboutUs'
import Services from './pages/services/Services'
import Home from './pages/home/home';
import ContactUs from './pages/contactus/ContactUs';
import Products from './pages/products/Products';
import Signup from './components/signup/Signup';
import { Toaster } from "react-hot-toast";
import Login from './components/login/Login';
import { useAuth } from './context/AuthProvider';


function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
   <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={authUser ? <Products /> : <Navigate to="/signup" />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Toaster />
    </>
  )
}

export default App
