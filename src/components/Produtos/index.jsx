import styles from './Produtos.module.css';
import { GiTheaterCurtains } from 'react-icons/gi'
import { MdOutlineSettingsRemote } from 'react-icons/md'

export default function Produtos() {
   return (
      <section className={styles.container__produtos}>
         <h3 className={styles.titulo}>Produtos</h3>
         <ul className={styles.lista__produtos}>
            <li className={styles.itens__produtos}>
                  <a className={styles.link__produtos} href='/produtos'> 
                     <GiTheaterCurtains color='#303030' size={100} />  
                     <span className={styles.titulo__produto}> Cortinas </span>
                  </a>
            </li>
            <li className={styles.itens__produtos}>
                  <a className={styles.link__produtos} href='/produtos'> 
                     <MdOutlineSettingsRemote color='#303030' size={100} />
                     <span className={styles.titulo__produto}> Automação </span>
                  </a>
               
            </li>
            <li className={styles.itens__produtos}>
                  <a className={styles.link__produtos} href='/produtos'> 
                     <GiTheaterCurtains color='#303030' size={100} /> 
                     <span className={styles.titulo__produto}>Perisanas</span>
                  </a>
            </li>
         </ul>
      </section>
   )
}