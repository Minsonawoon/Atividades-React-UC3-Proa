import styles from '../css/Aruba.module.css'
import ComponenteProps from './ComponenteProps.jsx'
import bandeira from '../imagens/band_aruba.png'

function Aruba(){

    return(
        <div className={styles.fundo}>
            <ComponenteProps 
            lugar="Aruba"
            texto="Aruba, pequena ilha do Caribe holandês ao largo da costa da Venezuela, tem clima seco, praias ensolaradas e ondas suaves. Ventos constantes produzem uma brisa fresca e inclinam as árvores divi-divi para o sudoeste."
            bandeira_pais={bandeira}
            />
        </div>
    )
}

export default Aruba