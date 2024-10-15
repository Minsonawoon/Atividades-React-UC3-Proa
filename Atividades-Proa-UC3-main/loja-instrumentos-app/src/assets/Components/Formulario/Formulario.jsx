import Style from "./Formulario.module.css"
import Insta from "../../images/insta.png"
import Whats from "../../images/whats.png"
import Face from "../../images/face.png"

function Formulario(){

    return(
        <div className={Style.section_laranja}>
            <form name="form" className={Style.form}>
           
                <label>Entre com o seu nome:</label> <br />
                <input class="input" type="text" name="nome" maxlength="50" size="50" required placeholder="Digite o seu nome aqui"/>
                <br /><br />

                <label>Entre com o seu e-mail:</label> <br />
                <input class="input" type="email" name="e-mail" maxlength="50" size="50" required placeholder="Digite o seu e-mail aqui"/>
                <br /><br />

                 <br />
                <textarea placeholder="Faça o seu pedido por aqui" width="10" height="40"></textarea>
                <br /><br />

                <input className={Style.enviar} type="submit" value="Enviar" />  
        </form>

        <aside className={Style.redes_socias}>
                    <p>Acesse também nossas redes sociais:</p><br/>
                    <a href="#"><img src={Whats}/></a>
                    <a href="#"><img src={Insta}/></a>
                    <a href="#"><img src={Face}/></a>
                </aside>
        </div>
    );
}

export default Formulario