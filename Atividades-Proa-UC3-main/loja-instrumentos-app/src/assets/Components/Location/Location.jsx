import Style from "./Location.module.css"

function Location(){

    return(
        <div className={Style.section_amarela}>
            <section className={Style.section_azul}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d234014.34061215207!2d-46.72594963588674!3d-23.587325173594248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-23.657853499999998!2d-46.4296952!4m5!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sgoogle%20maps%20senac%20lapa%20tito!3m2!1d-23.5280856!2d-46.691759999999995!5e0!3m2!1spt-BR!2sbr!4v1729031280546!5m2!1spt-BR!2sbr"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
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