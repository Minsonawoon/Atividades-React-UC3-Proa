import Logo from "../imagens/viagens.jpg"
import Lupa from "../imagens/lupa.png"
import styles from "../css/Header.module.css"
import {Link} from 'react-router-dom' 

function Header(){

    return(

        <header className={styles.content}>
            <Link to='/'>
                <img src={Logo} alt="Logo" className={styles.logo} />
            </Link>
            <nav className={styles.menu}>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='Escocia'>Escócia</Link></li>
                    <li><Link to='GrandCanyon'>Grand Canyon</Link></li>
                    <li><Link to={'https://www.decolar.com/viagens/culturais/muralha-da-china-maravilhas-do-mundo'}>Muralhas da China</Link></li>
                    <li><Link to='Aruba'>Aruba</Link></li>
                </ul>   
            </nav>

            <div className={styles.login}>
                <input type="search" />
            </div>

            <img src={Lupa} alt="Lupa" className={styles.lupa}/>

        </header>

    )
}

export default Header