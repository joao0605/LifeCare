import Image from "next/image"
import logoImg from '../../../public/logotipoSecundario.svg'

export default function LogoPequeno(){
    return (
      
           <Image
      src={logoImg}
      alt="logo-secundario"
      width="90"
      height="90"
        
    />
       
    )
} 