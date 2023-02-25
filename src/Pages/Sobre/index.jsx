import styles from './Sobre.module.css';
import logo from '../../imagens/logo.png';
import imagemCortina from '../../imagens/ImagemCortina.png'
import imagemCortina2 from '../../imagens/ImagemCortina2.png'


export default function Sobre(){
   return (
      <section className={styles.container__sobre}>
         <h2 className={styles.titulo__sobre}>Sobre a Dr Cortinas</h2>

         <div className={styles.container__texto}>
            <img className={styles.imagem__cortina} src={imagemCortina} alt="Imagem Dr Cortinas" />
            <p className={styles.texto__sobre}>
               A Dr. Cortinas e Persianas, 
               tem o foco de buscar a satisfação plena dos clientes. 
               Estamos em constante aprimoramento dos produtos, 
               seguindo sempre as tendências de mercado e suas necessidades.
               Empresa idônea, familiar e que tem objetivo de atender cada cliente de forma individual e personalizada, 
               para entender a sua necessidade para que juntos possamos transformar o seu ambiente ainda mais aconchegante e sofisticado.
            </p>
         </div>
         <div className={styles.container__texto}>
            <p className={styles.texto__sobre}>
               Transformamos seu ambiente com produtos de altíssima qualidade, 
               A cortina é capaz de valorizar qualquer ambiente, até mesmo a fachada da sua casa!
               Unindo elegância e praticidade, as persianas dão um toque especial a qualquer ambiente. 
               Esse tipo de persiana une a elegância das cortinas e a praticidade das persianas. 
               Ainda hoje são as soluções arquitetônicas mais tradicionais para atingir dois objetivos: 
               Dar privacidade a quem está em um cômodo e reduzir sua luminosidade.
            </p>
            <img src={imagemCortina2} className={styles.imagem__cortina} alt="Imagem Dr Cortinas" />
         </div>
      </section>
   )
}