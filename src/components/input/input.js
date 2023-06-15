import styles from './input.module.css'

/*  padding: 12px 24px;
    border: 0;
    background-color: #ffff;
    border-radius: 10px;*/
export default function Input(props) {
    
    return(
        <input className={styles.input}{...props}/>
    )
}