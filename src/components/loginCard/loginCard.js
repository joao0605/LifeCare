import styles from './loginCard.module.css'


export default function LoginCard({ title, children }) {
    return (

        <div >
                           
                <div className='bg-white/50 rounded-xl w-80 h-72 p-5'>
                    <h2 className={styles.title}>{title}</h2>
                    {children}
                </div>
        
            
        </div>
    )
}