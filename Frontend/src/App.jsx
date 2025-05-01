import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import SignupForm from "./Components/SignupForm";
import FreeBook from "./Components/FreeBook";
import Cource from "./Components/Cource";
import Admin from "../src/Admin/Admin";
import ThankYouSignUp from "../src/Pages/ThankYouSignUp";
import Buy from "./Components/Buy";
import Thankyou from "./Pages/Thankyou";
import ProtectedRoute from "./Route/ProtectedRoute";

import { useState, useEffect } from "react";
import Order from "./Components/Order";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check token in localStorage on page load
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Routes>
      <Route path='/' element={<Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>
        <Route index element={<Home />} />

      {/* Public routes */}
      <Route path='about' element={<About />} />
      {/* <Route path='contact' element={<Contact />} /> */}
      <Route path='login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path='SignupForm' element={<SignupForm />} />
      <Route path='ThankYouSignUp' element={<ThankYouSignUp />} />
      {/* <Route path="Buy" element={<Buy />} /> */}
      <Route path="Thankyou" element={<Thankyou />} />

      {/* Protected route */}

      <Route
        path='admin'
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route
        path='Order'
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Order />
          </ProtectedRoute>
        }
      />
      <Route
        path='Buy'
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Buy />
          </ProtectedRoute>
        }
      />
      <Route
        path='contact'
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Contact />
          </ProtectedRoute>
        }
      />
      <Route
        path='FreeBook'
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <FreeBook />
          </ProtectedRoute>
        }
      />
      <Route
        path='Cource'
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Cource />
          </ProtectedRoute>
        }
      />
      <Route
        path='FreeBook'
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <FreeBook />
          </ProtectedRoute>
        }
      />
      {/* Not found */}
      <Route path='*' element={<h1>404 Not Found</h1>} />
    </Route>
    </Routes >
  );
}

export default App;
