import { useState } from "react"
import RandomNumber from "./RandomNumber";

function Temp(){
    const [min,setMin] = useState(1)
    const [max,setMax] = useState(100)
    const [number, setNumber] = useState(null);
    const random= ()=>{
        setNumber(Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min))
    };
    const handleminChange= (evt)=>{
        setMin(evt.target.value)
        console.log(evt.target.value)
    }
    const handlemaxChange= (evt)=>{
        setMax(evt.target.value)
        console.log(evt.target.value)
    }

    return(
        <>
        
        <RandomNumber 
        mini={min}
        maxi={max} 
        generate={random} 
        handlemaxChange={handlemaxChange} 
        handleminChange={handleminChange}
        number={number}
        />
        </>
    )
}
export default Temp