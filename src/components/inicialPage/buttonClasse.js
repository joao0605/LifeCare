import Image from "next/image"
import classe from '../../../public/classe.png'
import styles from './buttonInicialPage.module.css'
import { useRouter } from "next/router"

// criar pagina classe
export default function ButtonClasse() {
const router = useRouter()
    return (
        <div className={styles.iconclasse}>
            <button onClick={() => router.push('/manager/listStudents')}><Image className= {styles.imgClasse} src={classe}/></button>
        </div>
    )
}