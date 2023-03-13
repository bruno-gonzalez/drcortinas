import styles from './BotaoWpp.module.css'

export default function BotaoWpp(){
   return(
      <a href="https://api.whatsapp.com/send/?phone=5551991335147&text&type=phone_number&app_absent=0" target='_blank' className={styles.link__botao}>
         <button className={styles.botao__wpp}>Faça já seu orçamento</button>
      </a>
   )
}