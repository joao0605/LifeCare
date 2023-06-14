import Image from 'next/image'
import profile from '../../../public/profile.png'
import report from '../../../public/report.png'
import chat from '../../../public/chat.png'
import classe from '../../../public/classe.png'
import styles from './navBar.module.css'
import { useRouter } from "next/router"



export default function NavButtonTeacher(props) {
    const router = useRouter()

    return (
        <div className={styles.navButtons}>

            <button onClick={() => router.push('/manager/data')} className={props.page == 'personalDataTeacherTest' ? styles.profile : styles.profileOpacity}>
                <Image
                    src={profile}className={styles.icon} />
            </button>

            <button onClick={() => router.push('/manager/form/listForm')} className={props.page == 'listForm' ? styles.report : styles.reportOpacity}>
                <Image
                    src={report}className={styles.icon} />
            </button>

            <button onClick={() => router.push('/chatTest')} className={props.page == 'chatTest' ? styles.chat : styles.chatOpacity}>
                <Image src={chat}className={styles.icon} />
            </button>

            <button onClick={() => router.push('/manager/listStudents')} className={props.page == 'listStudents' ? styles.classe : styles.classeOpacity}>
                <Image src={classe}className={styles.icon} />
            </button>

        </div>)
}