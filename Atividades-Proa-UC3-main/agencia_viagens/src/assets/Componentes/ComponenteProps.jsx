import styles from '../css/ComponenteProps.module.css'

function ComponenteProps({lugar, texto, bandeira_pais}){
    return(
        <div className={styles.corpo_props}>
            <h2>Venha conhecer esse lugar incrível: {lugar}!!!</h2>
            <p> {texto}</p>
            <img src={bandeira_pais} alt="" />
        </div>
    )
}

export default ComponenteProps