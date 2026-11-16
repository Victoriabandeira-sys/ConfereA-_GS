import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Problema from './components/Problema'
import Solucao from './components/Solucao'
import Demostracao from './components/Demosnstração'
import Pratica from './components/Pratica'
import Criterios from './components/Criterios'
import Contatos from './components/Contatos'
import Footer from './components/Footer'

function App() {
    const { hash } = useLocation()

    useEffect(() => {
    if (hash) {
      const elemento = document.querySelector(hash)
      if (elemento) {
        elemento.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [hash])
  
  return (
    <Routes>
      <Route path="/" element={
    <>
      <Navbar />
      <Problema />
      <Solucao />
      <Demostracao />
      <Pratica />
      <Contatos />
      <Footer />
    </>
  } />
      <Route path="/criterios" element={<Criterios />} />
    </Routes>
  )
}

export default App