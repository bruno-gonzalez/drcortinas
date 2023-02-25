import Banner from '../../components/Banner'
import Cards from '../../components/Cards'
import Produtos from '../../components/Produtos'
import Projetos from '../../components/Projetos'
import styles from './Inicio.module.css'

export default function Inicio(){
   return(
      <div className={styles.inicio}>
         <Banner />
         <Cards />
         <Produtos />
         <Projetos />
         
      </div>
   )
}