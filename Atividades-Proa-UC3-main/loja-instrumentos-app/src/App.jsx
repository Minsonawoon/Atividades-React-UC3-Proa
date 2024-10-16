import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from "./assets/Components/Navigation/Navigation.jsx"
import Nossa_loja from "./assets/Components/Nossa_loja/Nossa_loja.jsx"
import Venda from "./assets/Components/Venda/Venda.jsx"
import Formulario from "./assets/Components/Formulario/Formulario.jsx"
import Location from "./assets/Components/Location/Location.jsx"
import Footer from "./assets/Components/Footer/Footer.jsx"
import Home from "./assets/Components/Home.jsx"


function App() {

  return (
    <>
      <Router>
        <Nav />
        <Routes>
            <Route path='Home' element={<Home />} />
            <Route path='Nossa_loja' element={<Nossa_loja />} />
            <Route path='Venda' element={<Venda />} />
            <Route path='Location' element={<Location />} />
            <Route path='Formulario' element={<Formulario />} />
        </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
