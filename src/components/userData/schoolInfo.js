import styles from './TeacherInfo.module.css'

export default function SchoolInfo({ name, phoneNumber, address }) {

    return (
        <div>
            <h2 className={styles.title}><strong >Informações Escola</strong></h2>
            <p className={styles.stText}>Nome: {name}</p>
            <p className={styles.text}>Telefone/Whatsapp: {phoneNumber}</p>
            <p className={styles.text}>Endereço: {address}</p>
        </div>
    )
}