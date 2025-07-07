import React from "react";

export default function Register(){
    const[presence, setPresence] = useAttendance("Null")

    const pres = (attendance) => {
        let reg = ""
        if (attendance == "Present"){
            reg = "Present in class"  
        }
        setPresence(reg)
    }

    const abst = (absence) =>{
        let notPres = ""
        if(absence == "Nil"){
            notPres = "Not present in class"
        }
        setPresence(notPres)

    }


    return{
        presence, pres, abst
    }
}