import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import imagensCortinas from "../../../data/imgPersianas.json";
import styles from "../CarrosselCortinas/Cortinas.module.css";
import {FiExternalLink, FiPhone} from "react-icons/fi";

export default function CarrosselPersianas(){
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
               Unindo elegância e praticidade, 
               as persianas verticais de PVC ou de tecido dão um toque especial a qualquer ambiente. 
               Esse tipo de persiana une a elegância das cortinas e a praticidade das persianas. 
               Ainda hoje são as soluções arquitetônicas mais tradicionais para atingir dois objetivos:
                dar privacidade a quem está em um cômodo e reduzir sua luminosidade.
            </p>
            <div className={styles.rodape}>
               <a className={styles.link__botao} href="https://www.instagram.com/dr.cortinascanoas/">
                  <button className={styles.botaoIG}>
                     Veja mais no Instagram <FiExternalLink  color='#fff'/>
                  </button>
               </a>
               <a className={styles.link__botao} href="https://api.whatsapp.com/send/?phone=5551991335147&text&type=phone_number&app_absent=0">
                  <button className={styles.botaoOR}>
                     Orçamento <FiPhone size={20} />
                  </button>
               </a>
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
               Unindo elegância e praticidade, 
               as persianas verticais de PVC ou de tecido dão um toque especial a qualquer ambiente. 
               Esse tipo de persiana une a elegância das cortinas e a praticidade das persianas. 
               Ainda hoje são as soluções arquitetônicas mais tradicionais para atingir dois objetivos:
                dar privacidade a quem está em um cômodo e reduzir sua luminosidade.
            </p>
            <div className={styles.rodape}>
               <a className={styles.link__botao} href="https://www.instagram.com/dr.cortinascanoas/">
                  <button className={styles.botaoIG}>
                     Veja mais no Instagram <FiExternalLink  color='#fff'/>
                  </button>
               </a>
               <a className={styles.link__botao} href="https://api.whatsapp.com/send/?phone=5551991335147&text&type=phone_number&app_absent=0">
                  <button className={styles.botaoOR}>
                     Orçamento <FiPhone size={20} />
                  </button>
               </a> 
            </div>
         </Swiper>
      </section>
   )
}