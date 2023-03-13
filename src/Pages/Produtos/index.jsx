import styles from "./Produtos.module.css"
import CarrosselCortinas from "./CarrosselCortinas"
import CarrosselPersianas from "./CarrosselPersianas"
import CarrosselAutomaticas from "./CarrosselAutomaticas"

export default function Produtos() {
   return (
    <section className={styles.produtos__container}>
        <div className={styles.produtos}>
            <h3 className={styles.produtos__titulo}>Cortinas</h3>
            <CarrosselCortinas />
        </div>
        <div className={styles.produtos}>
            <h3 className={styles.produtos__titulo}>Persianas</h3>
            <CarrosselPersianas />
        </div>
        <div className={styles.produtos}>
            <h3 className={styles.produtos__titulo}>Cortinas Automáticas</h3>
            <CarrosselAutomaticas />
        </div>
    </section>
   ) 
}