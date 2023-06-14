import Image from "next/image"
import logoImg from '../../../public/logotipoSecundario.svg'

export default function Logo(){
    return (
      
           <Image
      src={logoImg}
      alt="logo-secundario"
      width="250"
      height="250"
        
    />
       
    )
} 