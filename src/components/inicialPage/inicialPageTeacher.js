import ButtonChat from "./buttonChat"
import ButtonDailyReport from "./buttonDailyReport"
import ButtonPersonalData from "./buttonPersonalData"
import ButtonClasse from "./buttonClasse"
import styles from "./buttonInicialPage.module.css"
import Image from "next/image"
import logosecundario from '../../../public/novologomamae.png'




export default function InicialPageTeacher() {

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
                <div><ButtonClasse /></div>
            </div>

            <div >
                <Image className={styles.logosecundario}
                    src={logosecundario} />
            </div>
        </div>
    )
}