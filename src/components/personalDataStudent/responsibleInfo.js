import styles from './StudentInfo.module.css'


export default function ResponsibleInfo({mothersName, phoneNumber, email, address}) {


    return (
        <div>
            <h2 className={styles.title}><strong>Informações Responsável</strong></h2>

            <p className={styles.stText}>Nome: {mothersName}</p>

            <p className={styles.text}>Telefone/Whatsapp: {phoneNumber}</p>
            <p className={styles.text}>Email: {email}</p>
            <p className={styles.text}>Endereço: {address}</p>
        </div>
    )
}