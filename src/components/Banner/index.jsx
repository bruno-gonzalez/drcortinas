import styles from './Banner.module.css';
import 'animate.css';

export default function Banner(){
   return(
      <section className={styles.banner__container}>
         <h1 className={`animate__animated animate__fadeInLeftBig ${styles.titulo}`}>As melhores cortinas da região!</h1>
      </section>
   )
}