import styles from './button.module.css'


export default function ButtonSubmit({children, ...props}) {
    
    return(
        <button className={styles.buttonSubmit} {...props}> {children}</button>
    )
}