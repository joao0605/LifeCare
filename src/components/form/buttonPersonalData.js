import Image from "next/image"
import apple from '../../../public/apple.png'

export default function ButtonPersonalData() {

    return (
        <div>
            <button >
                <Image
                src={apple}/>
            </button>
        </div>
    )
}