import Image from "next/image"
import styles from './buttonInicialPage.module.css'
import chat from '../../../public/chat.png'
import { useRouter } from "next/router"


        
export default function ButtonChat() {
const router = useRouter()

   return (
            <div className={styles.iconChat}>
                <button onClick={() => router.push('/chatStudent')}><Image className= {styles.imgChat} src={chat} /></button>
            </div>
        
    )
}