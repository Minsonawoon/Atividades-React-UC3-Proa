import Style from './Nossa_loja.module.css'

function Nossa_loja(){

    return(
        <div className={Style.section_vermelha}>
            <div className={Style.quadrado}>
                <div className={Style.texto}>
                    <h2>Nossa Loja - Instrumentos Musicais</h2>
                    Bem-vindo à Sonora Instrumentos Musicais, sua loja de confiança em São Paulo para todos os amantes da música! Localizada no coração da cidade, a Sonora oferece uma ampla variedade de instrumentos musicais para músicos de todos os níveis, desde iniciantes até profissionais. Com um ambiente acolhedor e uma equipe de especialistas apaixonados por música, nossa missão é proporcionar a melhor experiência de compra, combinando qualidade, variedade e atendimento personalizado. <br/> Na Sonora, você encontrará desde violões e guitarras, baterias e teclados, até instrumentos de sopro e cordas, todos das marcas mais renomadas do mercado. Além disso, contamos com uma vasta seleção de acessórios e equipamentos de áudio, sempre com o compromisso de oferecer o que há de melhor para o seu som.
                </div>
            </div>
            <div className={Style.quadrado1}></div>
        </div>
    );
}

export default Nossa_loja