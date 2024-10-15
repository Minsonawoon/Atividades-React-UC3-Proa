import Style from "./Location.module.css"

function Location(){

    return(
        <div className={Style.section_amarela}>
            <section className={Style.section_azul}></section>
            <section className={Style.local_loja}>
            <div className={Style.texto}>
                    <h2>Nossa Loja - Instrumentos Musicais</h2>
                    Venha nos visitar e deixe a Sonora Instrumentos Musicais ser parte da sua jornada musical. Seja você um músico amador, um estudante, ou um artista profissional, estamos aqui para ajudar você a encontrar o instrumento perfeito para expressar sua paixão pela música.
                </div>
            </section>
        </div>
    );
}

export default Location