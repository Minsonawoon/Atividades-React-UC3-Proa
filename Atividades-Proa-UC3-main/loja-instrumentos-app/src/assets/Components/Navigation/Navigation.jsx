import Style from './Navigation.module.css'

function Nav(){
    return(
        <div className={Style.navegation}>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Quem Somos</a></li>
                    <li><a href="#">Instrumentos</a></li>
                    <li><a href="#">Endereço</a></li>
                    <li><a href="#">Contato</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav