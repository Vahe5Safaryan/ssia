import './App.css';
import React from 'react';
import { Layout } from './Component/Layout/Layout'
import Home from "./Pages/Home/Home";
import { Routes, Route } from 'react-router-dom';
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Application from "./Pages/Application/Application";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFounf";
import Gallery from "./Pages/Gallery/Gallery";
import Detail from "./Pages/Detail/Detail";
import Login from "./Pages/Login/Login";
import Account from "./Pages/Account/Account";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import ConfirmPassword from "./Pages/ConfirmPassword/ConfirmPassword";
import useAuth from "./hooks/useAuth";


function App() {
    const {user} = useAuth()

  return (
      <>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route path="/" index element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<Detail section={'blog'} />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                  <Route path="/confirm-password" element={<ConfirmPassword />} />
                  <Route path="/account" element={<Account />} />
                  <Route path="*" element={<NotFound />} />
                  {user && <>
                      <Route path="/application/:id" element={<Detail section={'application'} />} />
                      <Route path="/application" element={<Application />}/>
                  </>}
              </Route>
          </Routes>
      </>
  );
}

export default App;
