import ButtonPersonalData from "./buttonPersonalData";
import ButtonDailyReport from "./buttonDailyReport";
import ButtonChat from "./buttonChat";
import ButtonStudents from "./buttonStudents";
import BathroomBox from "./bathroomBox";
import ReportBox from "./reportBox";
import BreakfastBox from "./breakfastBox";
import LunchBox from "./lunchBox";
import SleepBox from "./sleepBox";
import CommentBox from "./commentBox";
import { useState } from "react";
import styles from './form.module.css'



export default function Form(props) {


    const handleChange = (name, value) => {
        console.log(name, value)
        props.onChange([name, value]);
    };

    // function handleClick() {
    //     fetch ("/api/maganer/form", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(formData)
    //     })
    //     if (resposnse.status == 200){
    //         setFormData(
    //             {
    //                 date: new Date(),
    //                 breakfast: 2,
    //                 nap: 3 
    //             }
    //         )
    //     }
    //     return response.json()
    // }







    //falta NAV bar que ira substituir os botões
    // ideia de fazer a parte de cima do design como um banner
    return (
        <div className={styles.reportAll}>

            <div className={styles.tituloform}>
                <ReportBox date={props.date} name={props.name} />
            </div>

            <div className={styles.breakfast}>
                <BreakfastBox value={props.breakfast} onChange={e => handleChange('breakfast', e)} />

            </div>
            <div className={styles.lunchbox}>
                <LunchBox value={props.lunch} onChange={e => handleChange('lunch', e)} />
            </div>
            <div className={styles.bathroombox}>
                <BathroomBox pee={props.pee} poop={props.poop} onChange={e => handleChange(e[0], e[1])} />
            </div>
            <div className={styles.sleepbox}>
                <SleepBox value={props.nap} onChange={e => handleChange('nap', e)} />
            </div>
            <div className={styles.commentboxfull}>
                <CommentBox onChange={e => handleChange('observations', e)} value={props.observations} />
            </div>

        </div>
    )
}//  <button onClick={handleClick() }></button>