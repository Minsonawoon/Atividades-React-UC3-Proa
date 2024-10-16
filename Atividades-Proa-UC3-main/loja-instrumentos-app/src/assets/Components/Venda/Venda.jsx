import Style from "./Venda.module.css"

function Venda({imagem, nome, preco}){
     return(
        <div className={Style.section_azul}>
            <section className={Style.area_branca}>
                <img src={imagem} className={Style.imagem} alt="" />
                <div className={Style.nome}>{nome}</div>
                <div className={Style.preco}>{preco}</div>
            </section>
        </div>
     );
}

export default Venda