import logo from '../../imagens/logo.png'
import LinkPages from '../LinkPages';
import styles from './Cabecalho.module.css';

export default function Cabecalho () {
   return(
      <header className={styles.cabecalho}>
         <img src={logo} alt='Logo Dr Cortinas' />
         <div className={styles.navbar}>
            <span className={styles.navbar__item}><LinkPages url="/">Inicio</LinkPages></span>
            <span className={styles.navbar__item}><LinkPages url="sobre">Sobre nós</LinkPages></span>
            <span className={styles.navbar__item}><LinkPages url="produtos">Produtos</LinkPages></span>
         </div>
      </header>
   )
}