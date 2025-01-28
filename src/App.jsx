import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Languages from './components/Languages'
import Practice from './components/Practice'
import About from './components/About'
import Navbar from './components/Navbar'
import Fields from './components/Fields'
import LanguageDetail from './components/LanguageDetail'
import Footer from './components/Footer'
function App() {

  return (
    <div className='house'>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/languages' element={<Languages />} />
        <Route path='/practice' element={<Practice />} />
        <Route path='/about' element={<About />} />
        <Route path='/fields' element={<Fields />} />
        <Route path='/languagedetail/:id' element={<LanguageDetail/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
