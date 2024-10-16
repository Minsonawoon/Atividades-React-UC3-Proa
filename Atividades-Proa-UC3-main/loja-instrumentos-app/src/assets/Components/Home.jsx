import Nossa_loja from "./Nossa_loja/Nossa_loja.jsx"
import Venda from "./Venda/Venda.jsx"
import Formulario from "./Formulario/Formulario.jsx"
import Location from "./Location/Location.jsx"
import Imagem from "../images/guitarrinha.jpg"

function Home(){
    <>
        <Nossa_loja />
        <Venda imagem={Imagem} nome="VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE" preco="R$ 989,50"/>
        <Formulario />
        <Location />
    </>
}

export default Home