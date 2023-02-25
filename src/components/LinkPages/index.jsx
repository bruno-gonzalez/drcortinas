import { Link } from "react-router-dom"
import styles from "./Link.module.css"


export default function LinkPages({url, children}){
   return(
      <Link to={url} className={styles.link}>
         {children}
      </Link>
   )
}