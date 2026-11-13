import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Problema from './components/Problema'
import Solucao from './components/Solucao'
import Demostracao from './components/Demosnstração'
import Pratica from './components/Pratica'
import Criterios from './components/Criterios'

function App() {
  return (
    <Routes>
      <Route path="/" element={
    <>
      <Navbar />
      <Problema />
      <Solucao />
      <Demostracao />
      <Pratica />
    </>
  } />
      <Route path="/criterios" element={<Criterios />} />
    </Routes>
  )
}

export default App
