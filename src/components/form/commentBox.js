import styles from './form.module.css'

export default function CommentBox(props) {

    const handleValue = e => {
               
        props.onChange(e.target.value)
       };
   
    return (
       
        <div className={styles.comment} >
            <p className={styles.commentTitle}>Observações</p>
            <input value={props.value} className={styles.commentbox} onChange={handleValue} type="text"></input>
        </div>
    )
}