import Nav from "./assets/Components/Navigation/Navigation.jsx"
import Nossa_loja from "./assets/Components/Nossa_loja/Nossa_loja.jsx"
import Venda from "./assets/Components/Venda/Venda.jsx"
import Formulario from "./assets/Components/Formulario/Formulario.jsx"
import Location from "./assets/Components/Location/Location.jsx"
import Footer from "./assets/Components/Footer/Footer.jsx"
import Imagem from "./assets/images/guitarrinha.jpg"


function App() {

  return (
    <>
      <Nav />
      <Nossa_loja />
      <Venda imagem={Imagem} nome="VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE" preco="R$ 989,50"/>
      <Location />
      <Formulario />
      <Footer />
    </>
  )
}

export default App
