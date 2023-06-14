import Image from "next/image"
import styles from './buttonInicialPage.module.css'
import grafico from '../../../public/grafico.png'
import { useRouter } from "next/router"

//criar historico de formularios
        
export default function ButtonRecord() {
    const router = useRouter()

   return (
            <div className={styles.iconrecord}>
                <button onClick={() => router.push('/student/chartStudent')}><Image className= {styles.imgRecord} src={grafico} /></button>
            </div>
        
    )
}