import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import imagensCortinas from "../../../data/imgCortinas.json";
import styles from "./Cortinas.module.css";
import {FiExternalLink, FiPhone} from "react-icons/fi";

export default function CarrosselCortinas(){
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
                  <img className={styles.imagem__carrossel} src={imagem.imagem} alt="Imagem de Cortina" />
               </SwiperSlide>
            )}
            <p className={styles.descricao}>
               O charme das cortinas agrega muito valor à decoração, 
               se for utilizada de forma harmoniosa e sofisticada.
               Além disso, faz total diferença na decoração. 
               Por isso, você deve deixar na mão de quem entende.
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
                  <img className={styles.imagem__carrossel} src={imagem.imagem} alt="Imagem de Cortina" />
               </SwiperSlide>
            )}
            <p className={styles.descricao}>
               O charme das cortinas agrega muito valor à decoração, 
               se for utilizada de forma harmoniosa e sofisticada.
               Além disso, faz total diferença na decoração. 
               Por isso, você deve deixar na mão de quem entende.
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