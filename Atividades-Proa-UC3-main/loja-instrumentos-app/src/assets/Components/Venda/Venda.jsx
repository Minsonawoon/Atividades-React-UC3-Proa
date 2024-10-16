import Style from "./Venda.module.css"
import Violao from "../../images/guitarrinha.jpg"
import Flauta from "../../images/flauta.jpg"
import Otamatone from "../../images/otamatone.jpg"
import Ukulele from "../../images/ukulele.jpg"
import CuboBranco from "../CuboBranco/CuboBranco.jsx"

function Venda({imagem, nome, preco}){
     return(
        <div className={Style.section_azul}>
            <CuboBranco imagem={Violao} nome="VIOLÃO YAMAHA C70 II CLÁSSICO NYLON ACÚSTICO NATURAL BRILHANTE" preco="R$ 989,50"/>
            <CuboBranco imagem={Flauta} nome="FLAUTA DOCE YAMAHA CLÁSSICA BEGE NATURAL" preco="R$ 29,90"/>
            <CuboBranco imagem={Otamatone} nome="OTAMATONE INSTRUMENTO MUSICAL JAPONÊS SINTETIZADOR" preco="R$ 409,45"/>
            <CuboBranco imagem={Ukulele} nome="UKULELE SOPRANO VINTAGE ELÉTRICO - SÉRIE JAVA - NATURAL VINTAGE" preco="R$ 514,50"/>
        </div>
     );
}

export default Venda