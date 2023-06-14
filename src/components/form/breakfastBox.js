import styles from './form.module.css'
import Image from "next/image"
import apple from '../../../public/apple.png'


export default function BreakfastBox(props) {
    const handleValue = e => {

        props.onChange(e.target.value)
    };


    return (

        <div className={styles.breakfastbox}>
            <div className={styles.iconline}><Image
                src={apple} />
                <p>Pequeno Almoço </p>
                <hr className={styles.hrline} />
            </div>
            <input className={styles.actualslider} type="range" max="5" name='nap' min="0" onChange={handleValue} />

        </div>
    )
}