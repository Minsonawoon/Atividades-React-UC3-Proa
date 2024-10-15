import Style from "./Footer.module.css"
import Insta from "../../images/insta.png"
import Whats from "../../images/whats.png"
import Face from "../../images/face.png"

function Footer(){

    return(
        <footer className={Style.footer}>
            <div className={Style.footer_loja}>
                <p className={Style.titulo_footer}>Nossa Loja - Instrumentos Musicais</p>
                <p className={Style.localizacao}>Rua Tito, 54 - Lapa <br /> São Paulo - Brasil</p>

                <div className={Style.redes_footer}>
                    <a href="#"><img src={Whats} alt="WhatsApp"/></a>
                    <a href="#"><img src={Insta} alt="Instagram"/></a>
                    <a href="#"><img src={Face} alt="Facebook"/></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer