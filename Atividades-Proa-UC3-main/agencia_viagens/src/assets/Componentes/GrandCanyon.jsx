import styles from '../css/GrandCanyon.module.css'
import ComponenteProps from './ComponenteProps.jsx'
import bandeira from '../imagens/bandeira-estados-unidos.jpg'

function GrandCanyon(){

    return(
        <div className={styles.fundo}>
            <ComponenteProps
            lugar="Grand Canyon"
            texto="O Parque Nacional do Grand Canyon, no Arizona, engloba grande parte do imenso Grand Canyon, com as formações de rocha vermelha em camadas, que revelam milhões de anos de história geológica."
            bandeira_pais={bandeira} />
        </div>
    )
}

export default GrandCanyon