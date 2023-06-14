import ButtonChat from "./buttonChat"
import ButtonDailyReport from "./buttonDailyReport"
import ButtonPersonalData from "./buttonPersonalData"
import ButtonRecord from "./buttonRecord"
import styles from "./buttonInicialPage.module.css"
import Image from "next/image"
import logosecundario from '../../../public/novologomamae.png'



export default function InicialPageStudent() {

    const estudante = {
        name: "Nelson Medina",
        date: "12/05/1995"
    }

    return (
        <div>
            
            <div className={styles.slider}>
                <div><ButtonPersonalData /></div>
                <div><ButtonDailyReport /></div>
            </div>

            <div className={styles.slider}>
                <div><ButtonChat /></div>
                <div><ButtonRecord /></div>
            </div>
            <div >
                <Image className={styles.logosecundario}
                    src={logosecundario} />
            </div>


        </div>
    )
}