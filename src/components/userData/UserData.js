
import UserInfo from "./UserInfo"
import styles from './UserInfo.module.css'

export default function UserData(props) {


  

    return (
        <div className={styles.userAll}>
            
            <div className=' bg-red-500flex items-center'>
                <UserInfo name={props.name} birthday={props.birthdate} phoneNumber={props.phoneNumber} email={props.email} address={props.address} />
            </div>
          

        </div>
    )

}