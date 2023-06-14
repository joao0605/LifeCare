
import Image from "next/image";
import notStart from '../../../public/statusNotStart.png'
import complete from '../../../public/statusComplete.png'
import incomplete from '../../../public/statusIncomplete.png'
import grafico from '../../../public/grafico.png'
import { useRouter } from "next/router";
import styles from './list.module.css'

// pensar no status com um numero de 0 ate 2
//0 status vermelho(sem nenhuma informação)
// 1 status laranja( incomplete)
// 2 status verde(completed)


export function ItemForm({ name, registration, sellerId }) {

    
    const router = useRouter()


    

    

    return (
        <div className={styles.containerButton}>
            <p className={styles.title}  >{name} {registration} </p>
            <Image
               className={styles.icon} src={grafico} onClick={() => router.push(`/adm/data/${sellerId}`)} width={20} />
        </div>
    )
}




