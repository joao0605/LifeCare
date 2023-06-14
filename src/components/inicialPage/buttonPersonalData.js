import Image from "next/image"
import styles from './buttonInicialPage.module.css'
import profile from '../../../public/profile.png'
import { useRouter } from "next/router"

   export default function ButtonPersonalData() {
    const router = useRouter()

    return (
        <div className={styles.iconPersonalData}>
        <button onClick={() => router.push('/manager/data')}><Image className= {styles.imgProfile} src={profile} /></button>
    </div>
    )
}