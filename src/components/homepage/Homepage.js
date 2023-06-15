import { useRouter } from "next/router";
import Logo from "../logoTitle/logoPrincipal";
import styles from './Homepage.module.css'

export default function Homepage() {
    const router = useRouter()

    const handleVoltar = () => {
        router.push("/adm")
    }

    return (
        <div className={styles["sidebar"]}>

            <div onClick={handleVoltar}>
                <Logo />
            </div>

        </div>
    )
}