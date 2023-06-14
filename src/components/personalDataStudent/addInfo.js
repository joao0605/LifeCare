import styles from './StudentInfo.module.css'


export default function AddInfo({observations}) {



    return (
        <div>
            <h2 className={styles.title}><strong>Informações Adicionais</strong></h2>

           <p className={styles.stText}>{observations}</p>

        </div>
    )
}