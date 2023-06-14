import Image from 'next/image'
import profile from '../../../public/profile.png'
import report from '../../../public/report.png'
import chat from '../../../public/chat.png'
import grafico from '../../../public/grafico.png'
import styles from './navBar.module.css'
import { useRouter } from "next/router"

//criar rota para o chat e para record

export default function NavButtonStudent(props) {

    const router = useRouter()


    return (
        <div className={styles.navButtons}>

            <button onClick={() => router.push('/student/data')} className={props.page == 'personalDataStudentTest' ? styles.profile : styles.profileOpacity}>
                <Image
                    src={profile} className={styles.icon} />
            </button>

            <button onClick={() => router.push('/student/form')} className={props.page == 'formTest' ? styles.report : styles.reportOpacity}>
                <Image
                    src={report} className={styles.icon} />
            </button>

            <button onClick={() => router.push('/chatStudent')} className={props.page == 'chatStudent' ? styles.chat : styles.chatOpacity}>
                <Image src={chat} className={styles.icon} />
            </button>

            <button onClick={() => router.push('/student/chartStudent')} className={props.page == 'listHistoryReportStudent' ? styles.record : styles.recordOpacity}>
                <Image src={grafico} className={styles.icon} />
            </button>

        </div>)
}