import Carrossel from "../Carrossel";
import styles from './Projetos.module.css';
import { HiOutlineArrowSmRight } from 'react-icons/hi'

export default function Projetos() {
   return(
      <section className={styles.projetos__container}>
         <div className={styles.cabecalho__projetos}>
            <h2 className={styles.projetos__titulo}>Nossos Projetos</h2>
            <a className={styles.produtos__link} href="/produtos">Veja mais <HiOutlineArrowSmRight size={20} /> </a>
         </div>
         <Carrossel />
      </section>
   )
}