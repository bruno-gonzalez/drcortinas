import styles from "./Produtos.module.css"
import Carrossel from "../../components/Carrossel"

export default function Produtos() {
   return (
    <section className={styles.produtos__container}>
        <div className={styles.produtos}>
            <h3 className={styles.produtos__titulo}>Cortinas</h3>
            <Carrossel />
        </div>
        <div className={styles.produtos}>
            <h3 className={styles.produtos__titulo}>Persianas</h3>
            <Carrossel />
        </div>
        <div className={styles.produtos}>
            <h3 className={styles.produtos__titulo}>Cortinas Automáticas</h3>
            <Carrossel />
        </div>
    </section>
   ) 
}