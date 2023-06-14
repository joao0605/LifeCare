import { useState, useEffect } from "react"

export default function RangeSlider(props){

    const[valor, setValor] = useState(props.value)

    function handleChange(e){
        setValor(e.target.value)
    }

    useEffect(() => {
        console.log(props.value)
        setValor(props.value)
      }, []);

    return(
        <div className={styles.slider}>
            <input className={styles.actualslider} type="range" min="0" max="5" value={Number(valor)} onChange={(e) => handleChange(e)}/>
            <p>Valor: {valor} </p>

                 </div>
    )
}