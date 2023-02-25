import { Autoplay, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import imagensCarrossel from '../../data/db.json'
import styles from './Carrossel.module.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Carrossel() {

   return (
      <>
         <Swiper
            modules={[Autoplay, Pagination]}
            pagination={{
               type: 'bullets',
            }}
            autoplay
            spaceBetween={50}
            slidesPerView={3}
            className={styles.carrossel__desktop}
         >
            {imagensCarrossel.map(imagem =>
               <SwiperSlide className={styles.carrossel} key={imagem.id}>
                  <img className={styles.imagem__carrossel} src={imagem.foto} alt="" />
               </SwiperSlide>
            )}
         </Swiper>

         <Swiper
            className={styles.carrossel__mobile}
            modules={[Autoplay, Pagination]}
            pagination={{
               type: 'bullets',
            }}
            autoplay
            spaceBetween={50}
            slidesPerView={1}
         >
            {imagensCarrossel.map(imagem =>
               <SwiperSlide className={styles.carrossel} key={imagem.id}>
                  <img className={styles.imagem__carrossel} src={imagem.foto} alt="" />
               </SwiperSlide>
            )}
         </Swiper>
      </>

   )
}