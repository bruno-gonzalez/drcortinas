import logo from '../../imagens/logo.png';
import styles from './Rodape.module.css';
import { CiInstagram } from 'react-icons/ci'

export default function Rodape () {
   return(
      <footer className={styles.rodape}>
         <ul className={styles.rodape__lista}>
            <li className={styles.rodape__item}>
               <p>Contato</p>
               <a className={styles.rodape__link} href="https://api.whatsapp.com/send/?phone=5551991335147&text&type=phone_number&app_absent=0" target='_blank'>+55 (51) 9 91335147</a>
            </li>
            <li className={styles.rodape__item}>
               <img src={logo} alt="Logo Dr Cortinas" />
            </li>
            <li className={styles.rodape__item}> 
               <p>Redes Sociais</p>
               <a className={styles.rodape__link} href="https://www.instagram.com/dr.cortinascanoas/"><CiInstagram size={25} color='#fff700' />Instagram</a>
            </li>
         </ul>
      </footer>
   )
}