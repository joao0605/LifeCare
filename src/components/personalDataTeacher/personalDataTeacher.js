import SchoolInfo from "./schoolInfo"
import TeacherInfo from "./teacherInfo"
import AddInfo from "../personalDataStudent/addInfo"
import styles from './TeacherInfo.module.css'

export default function PersonalDataTeacher(props) {

    const escola = {
        name: "Amanhecer Feliz",
        phone: "999 999 999",
        address: "Rua das Felicidades"
    }
  
    const add = {
        addInfo: "Alérgica a crianças"
    }

  

    return (
        <div className={styles.teacherAll}>
            <div className={styles.escolaInfo}>
                <SchoolInfo name={escola.name} phoneNumber={escola.phone} address={escola.address} />
            </div>
            <div className={styles.professoraInfo}>
                <TeacherInfo name={props.name} birthday={props.birthdate} phoneNumber={props.phoneNumber} email={props.email} address={props.address} />
            </div>
            <div className={styles.observacoesInfo}>
                <AddInfo addInfo={add.addInfo} />
            </div>

        </div>
    )

}