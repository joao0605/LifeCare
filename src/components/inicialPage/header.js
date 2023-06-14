
import styles from './buttonInicialPage.module.css'
import Image from 'next/image'
import circulo from '../../../public/circulo.png'

export default function Header({ name }) {

    return (
        <div>
            <Image className={styles.circle}
                src={circulo} />
            <div>
                <h1>{name}</h1>
            </div>
            <hr></hr>

        </div>

    )
}