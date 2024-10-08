import styles from '../css/Muralha_china.module.css'
import ComponenteProps from './ComponenteProps.jsx'
import bandeira from '../imagens/band_china.png'

function Muralha_china(){

    return(
        <div className={styles.fundo}>
            <ComponenteProps 
            lugar="Muralha da China"
            texto="Grande Muralha da China é uma série de fortificações feitas de pedra, tijolo, terra compactada, madeira e outros materiais, geralmente construída ao longo de uma linha leste-oeste através das fronteiras históricas do norte da China para proteger os Estados e impérios chineses contra as invasões dos vários grupos nômades das estepes da Eurásia, principalmente os mongóis.  "
            bandeira_pais={bandeira}
            />
        </div>
    )
}

export default Muralha_china