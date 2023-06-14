
import { useRouter } from 'next/router'
import { useState, useEffect} from 'react'
import styles from '../styles/login.module.css'

import React from 'react';



import Logo from '../components/logoTitle/logoSecundario'
import LoginCard from "@/components/loginCard/loginCard"
import Input from '@/components/input/input'
import Button from '@/components/buttons/button'


export default function LoginPage() {
    const router = useRouter()
    const [state, setState] = useState({ password: "", email: "" })
    const [error, setError] = useState('')

  
    
    async function login() {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(state)
        })
        

        if (res.status === 200) {
            const corpo = await res.json()
            localStorage.setItem("token", corpo.token)
            localStorage.setItem("userType", corpo.userType)
            let userType = corpo.userType

            if(userType  === "adm"){

                router.push("/adm")
    
            } else if( userType === "seller"){
    
                router.push("/seller")
            }
        } else {
            
            setError("Usuário ou senha incorretos")
        };
    }

    useEffect(() => {
        const userType = localStorage.getItem('userType')
       
        if(userType  === "adm"){

            router.push("/adm")

        } else if( userType === "seller"){

            router.push("/seller")
        }

    }, [])


const handleSubmit = (e) => {
    e.preventDefault()
    login()
}
const handleChange = (value, field) => {
    setState(s => ({ ...s, [field]: value }))

    
}


return (
    <div className={styles.background}>



        <div className='h-[100vh] flex flex-col justify-around items-center' >

            <Logo />

            <LoginCard title={"Entre em sua conta"}>
                <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                    <Input type="email" placeholder="Seu e-mail" value={state.email} required onChange={(e) => { handleChange(e.target.value, 'email') }}></Input>
                    <Input type="password" placeholder="Sua senha" value={state.password} required onChange={(e) => { handleChange(e.target.value, 'password') }}></Input>
                    <Button>Entrar</Button>



                    {error && <p className={styles.error}>{error}</p>}

                </form>
            </LoginCard>
            
       

           

        </div>

    </div>
)

}