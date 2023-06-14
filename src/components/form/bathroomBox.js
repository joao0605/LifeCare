import styles from './form.module.css'
import RangeSlider from "./rangeSlider"
import Image from "next/image"
import bathroom from '../../../public/bathroom.png'


export default function BathroomBox(props) {

    const handleValue = (name, value) => {
        if(value === "0"){
            value = false
        } else {
            value = true
        }
        props.onChange([name, value]);
    };
    return (

        <div className={styles.bathroombox}>
            <div className={styles.iconline}> <Image
                src={bathroom} />
                <p>Casa de Banho</p>
                <hr className={styles.hrline} />
            </div>
            <div className={styles.sliders}>
                <div className={styles.necessity}>
                    <p className={styles.bathroomspec}>Nº 1</p>
                    <input className={styles.actualslider}  type="range" min="0" max="1"  onChange={(e) => handleValue("pee", e.target.value)} />
                </div>
                <div>
                    <p className={styles.bathroomspec}>Nº 2 </p>
                    <input className={styles.actualslider} type="range" min="0" max="1"  onChange={(e) => handleValue("poop", e.target.value)} />
                </div>
            </div>
        </div>
    )
}