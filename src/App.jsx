import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './section/Header.jsx'
import Footer from './section/Footer.jsx'
import Home from './pages/Home.jsx'

function App() {
  
  return (
    <>
      
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    <Footer />
  </Router>
        
    </>
  )
}

export default App
