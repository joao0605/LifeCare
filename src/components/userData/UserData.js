
import UserInfo from "./UserInfo"
import styles from './UserInfo.module.css'

export default function UserData(props) {


  

    return (
        <div className={styles.userAll}>
            
            <div className={styles.dataInfo}>
                <UserInfo name={props.name} birthday={props.birthdate} phoneNumber={props.phoneNumber} email={props.email} address={props.address} />
            </div>
          

        </div>
    )

}