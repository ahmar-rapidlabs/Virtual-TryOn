import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import HeroSection from './components/HeroSection';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


function App() {
  const router = createBrowserRouter([
    {path: '', element: <><Navbar /><HeroSection/><Footer/></>},


  ])
  return (
    <>
      <RouterProvider router={router} />
    </>

  );
}

export default App;
