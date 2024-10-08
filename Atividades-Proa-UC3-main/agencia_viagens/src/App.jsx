import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './assets/Componentes/Header'
import Home from './assets/Componentes/Home.jsx'
import Rodape from './assets/Componentes/Rodape.jsx'
import Escocia from './assets/Componentes/Escocia.jsx'
import Muralha_china from './assets/Componentes/Muralha_china.jsx'
import GrandCanyon from './assets/Componentes/GrandCanyon.jsx'
import Aruba from './assets/Componentes/Aruba.jsx'
import './App.css'

function App() {

  return (
    <>
      <Router>
          <Header />
          <Routes >
              <Route path='/' element={<Home />} /> 
              <Route path='Escocia' element={<Escocia />} /> 
              <Route path='Muralha_china' element={<Muralha_china />} /> 
              <Route path='GrandCanyon' element={<GrandCanyon />} /> 
              <Route path='Aruba' element={<Aruba />} /> 
          </Routes >
          <Rodape />
      </Router>
    </>
  )
}

export default App
