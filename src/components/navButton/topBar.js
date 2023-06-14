import Image from "next/image"
import logo from '../../../public/Logotipo_Little_Steps.png'
import logotext from '../../../public/Little_Steps.png'
import logout from '../../../public/logout2.png'
import styles from './navBar.module.css'
import { useRouter } from "next/router"


export default function TopBar(props) {
  const router = useRouter()
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userType");
    router.push("/login");
  };
  const rota = props.page == 'Teacher' ? '/manager/data' : '/student/data'

  return (
    <div className={styles.navbar}>

      <div className={styles.iconeProfile}>
        <Image onClick={() => router.push(rota)}
          src={logo} />
      </div>

      <div className={styles.logout}>
        <Image
          src={logout} onClick={handleLogout}/>
          
      </div>
      
      
      <div className={styles.logotext} >
        <Image src={logotext} />
       
      </div>
     
    </div>
    )
}

