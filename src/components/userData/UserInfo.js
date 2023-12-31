import styles from './UserInfo.module.css'

export default function UserInfo({name, birthday, phoneNumber, email, address}) {

    return (
        <div>
            <h2 className={styles.title}><strong>Informações Administrador</strong></h2>
            <p className={styles.stText}>Nome: {name}</p>
            <p lassName={styles.text}>Data de nascimento: {birthday}</p>
            <p lassName={styles.text}>Telefone/Whatsapp: {phoneNumber}</p>
            <p lassName={styles.text}>Email: {email}</p>
            <p lassName={styles.text}>Endereço: {address}</p>

        </div>
    )
}