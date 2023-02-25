import logo from '../../imagens/logo.png';
import styles from './Rodape.module.css';
import { CiInstagram } from 'react-icons/ci'

export default function Rodape () {
   return(
      <footer className={styles.rodape}>
         <ul className={styles.rodape__lista}>
            <li className={styles.rodape__item}>
               <p>Contato</p>
               <a className={styles.rodape__link} href="https://l1nk.dev/drcortinas" target='_blank'>+55 (51) 9 91335147</a>
            </li>
            <li className={styles.rodape__item}>
               <img src={logo} alt="Logo Dr Cortinas" />
            </li>
            <li className={styles.rodape__item}> 
               <p>Redes Sociais</p>
               <a className={styles.rodape__link} href=""><CiInstagram size={25} color='#fff700' />Instagram</a>
            </li>
         </ul>
      </footer>
   )
}