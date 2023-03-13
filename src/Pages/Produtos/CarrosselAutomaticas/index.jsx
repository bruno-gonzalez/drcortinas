import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import imagensCortinas from "../../../data/imgAutomaticas.json";
import styles from "../CarrosselCortinas/Cortinas.module.css";
import {FiExternalLink, FiPhone} from "react-icons/fi";

export default function CarrosselAutomaticas(){
   return(
      <section className={styles.cortinas__container}>
         <Swiper
            modules={[Autoplay, Pagination]}
            autoplay
            spaceBetween={50}
            slidesPerView={3}
            className={styles.carrossel__desktop}
         >
            {imagensCortinas.map(imagem => 
               <SwiperSlide className={styles.carrossel} key={imagem.id}>
                  <img className={styles.imagem__carrossel} src={imagem.imagem} alt="Imagem das nossas persianas" />
               </SwiperSlide>
            )}
             <p className={styles.descricao}>
               A motorização de sua cortina também vem acompanhada de um controle fixo, 
               que pode ser colocado na parede como um interruptor de luz normal. 
               É o conforto do novo século chegando ao aconchego de seu ambiente preferido.
            </p>
              <div className={styles.rodape}>
               <button className={styles.botaoIG}>
                  Veja mais no Instagram <FiExternalLink  color='#fff'/>
               </button>
               <button className={styles.botaoOR}>
                  Orçamento <FiPhone size={20} />
               </button>
            </div>
         </Swiper>

         <Swiper
            modules={[Autoplay, Pagination]}
            autoplay
            spaceBetween={50}
            slidesPerView={1}
            className={styles.carrossel__mobile}
         >
            {imagensCortinas.map(imagem => 
               <SwiperSlide className={styles.carrossel} key={imagem.id}>
                  <img className={styles.imagem__carrossel} src={imagem.imagem} alt="Imagem das nossas persianas" />
               </SwiperSlide>
            )}
             <p className={styles.descricao}>
               A motorização de sua cortina também vem acompanhada de um controle fixo, 
               que pode ser colocado na parede como um interruptor de luz normal. 
               É o conforto do novo século chegando ao aconchego de seu ambiente preferido.
            </p>
              <div className={styles.rodape}>
               <button className={styles.botaoIG}>
                  Veja mais no Instagram <FiExternalLink  color='#fff'/>
               </button>
               <button className={styles.botaoOR}>
                  Orçamento <FiPhone size={20} />
               </button>
            </div>
         </Swiper>
      </section>
   )
}