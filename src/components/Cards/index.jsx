import Card from './Card';
import styles from './Cards.module.css';
import 'animate.css';

export default function Cards() {
   return(
      <div className={`animate__animated animate__fadeInLeftBig ${styles.cards__container}`}>
         <Card
            titulo={"Orçamento"}    
            texto={"Faça já seu orçamento pelo nosso whatssap!"} 
            botao={"Whatsapp"} 
            cor={"#00de46"}
         />
         <Card
            titulo={"Sobre nós"}    
            texto={"Doutor Cortinas e Persianas tem o foco em buscar a satistfação dos nossos clientes. Estamos em constante aprimoramento dos nossos produtos..."} 
            botao={"Saiba mais"} 
         />
         <Card
            titulo={"Redes Sociais"}    
            texto={"Visite nosso Instagram"} 
            botao={"Instagram"} 
         />
      </div>
      
   )
}