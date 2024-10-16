import Style from "./CuboBranco.module.css"

function CuboBranco({imagem, nome, preco}){
    return(
        <section className={Style.area_branca}>
            <img src={imagem} className={Style.imagem} />
            <div className={Style.nome}>{nome}</div>
            <div className={Style.preco}>{preco}</div>
        </section>
    )
}

export default CuboBranco