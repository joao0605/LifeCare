import styles from './form.module.css'
import Image from "next/image"
import sleep from '../../../public/sleep.png'
import RangeSlider from "./rangeSlider";

export default function SleepBox(props) {

    const handleValue = e => {
               
       props.onChange(e.target.value)
      };

    return (
       
        <div className={styles.sleepbox}>
           <div className={styles.iconline}>
           <Image
            src={sleep}/>
            <p>Soneca</p>
            <hr className={styles.hrline} />
            </div>
            <input className={styles.actualslider} type="range" max="5" name='nap' min="0" onChange={handleValue}/>
        </div>
    )
}