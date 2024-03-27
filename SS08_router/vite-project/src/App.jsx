import React from 'react'
import Home from './components/Home'
import Introl from './components/Introl'
import Contact from './components/Contact'
import { Routes,Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      App
      <ul>
        <li>
          <a href="/">trang chu</a>
        </li>
        <li>
          <a href="/introl">gioi thieu</a>
        </li>
        <li>
          <a href="/Contact">lien he</a>
        </li>
      </ul>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/introl" element={<Introl />} />
      <Route path="/Contact" element={<Contact />} />
      </Routes>

    </>
  )
}
