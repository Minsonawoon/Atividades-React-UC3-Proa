import styles from "../css/Home.module.css"

function Home(){

    return(
        <section className={styles.corpo_home}>
            <div className={styles.imagem_lado}></div>
            <div className={styles.texto_lado}>
                <h1>Encontre aqui a viagem dos seus sonhos</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ullam ut fugit ea. Labore voluptas tempore, ratione maxime impedit cupiditate dignissimos, minus delectus ducimus accusamus ullam in soluta quisquam nobis?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto facilis et officia impedit voluptate sunt ipsa porro harum eos repudiandae rem asperiores expedita repellat non quaerat voluptatum, quibusdam provident magnam!</p>
            </div>
        </section>
    )

}

export default Home 