import styles from "../css/Rodape.module.css"
import insta from "../imagens/insta.jpeg"
import face from "../imagens/face.jpeg"
import tiktok from "../imagens/tiktok.png"
import whats from "../imagens/whtas.png"

function Rodape(){

    return(

        <footer className={styles.corpo}>
            <h3>Siga-nos nas redes sociais</h3>
            <div className={styles.icones}>
                <img src={insta} alt="Instagram" />
                <img src={face} alt="Facebook" />
                <img src={tiktok} alt="Tiktok" />
                <img src={whats} alt="WhatsApp" />
            </div>
            <h3>Telefone de Contato - (11) 4002-8922</h3>
        </footer>

    )

}

export default Rodape