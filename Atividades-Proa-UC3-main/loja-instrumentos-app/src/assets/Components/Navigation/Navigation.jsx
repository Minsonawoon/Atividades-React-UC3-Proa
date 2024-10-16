import Style from './Navigation.module.css'
import {Link} from 'react-router-dom' 

function Nav(){
    return(
        <div className={Style.navegation}>
            <nav>
                <ul>
                    <li><Link to='Home'>Home</Link></li>
                    <li><Link to='Nossa_loja'>Quem Somos</Link></li>
                    <li><Link to='Venda'>Instrumentos</Link></li>
                    <li><Link to='Location'>Endereço</Link></li>
                    <li><Link to='Formulario'>Contato</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav