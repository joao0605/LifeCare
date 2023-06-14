import styles from './form.module.css'
import Image from "next/image"
import lunch from '../../../public/lunch.png'
import RangeSlider from "./rangeSlider";

export default function LunchBox(props) {

    const handleValue = e => {
               
        props.onChange(e.target.value)
       };

    return (

        <div className={styles.lunchbox}>
            <div className={styles.iconline}>
                <Image
                    src={lunch} />
                <p>Almoço</p>
                <hr className={styles.hrline} />
                </div>

                <input className={styles.actualslider} value={props.value} type="range" max="5" name='lunch' min="0" onChange={handleValue}/>

        </div>
    )
}