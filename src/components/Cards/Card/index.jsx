import styles from './Card.module.css';

export default function Card({titulo, texto, botao, cor}) {
   return (
      <div className={styles.card__container}>
         <h3 className={styles.card__titulo}>{titulo}</h3>
         <span className={styles.card__paragrafo}>{texto}</span>
         <button style={{backgroundColor:`${cor}`}} className={styles.card__botao}>{botao}</button>
      </div>
   )
}