import styles from './BotaoWpp.module.css'

export default function BotaoWpp(){
   return(
      <a href="https://l1nk.dev/drcortinas" target='_blank' className={styles.link__botao}>
         <button className={styles.botao__wpp}>Faça já seu orçamento</button>
      </a>
   )
}