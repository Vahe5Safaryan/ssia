import './App.css';
import React from 'react';
import { Layout } from './Component/Layout/Layout'
import Home from "./Pages/Home/Home";
import { Routes, Route } from 'react-router-dom';
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Application from "./Pages/Application/Application";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NptFounf";
import Gallery from "./Pages/Gallery/Gallery";


function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route path="/" index element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/{id}" element={<Blog />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/application" element={<Application />}/>
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
              </Route>
          </Routes>
      </>
  );
}

export default App;
