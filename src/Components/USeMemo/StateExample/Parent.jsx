import { useState } from "react"
import Children from "./Children"


export default function Parent(){
    const[name,setName]=useState('pinky')
    console.log('parent render')
    return(
        <>
        <div>Count:{name}</div>
        {/* <button onClick={()=>setName('pinky')}>changeName</button> */}
         {/* render only creation phase becoz  setName value same and not render updating phase becoz value not update */}
        <button onClick={()=>setName('abhi')}>changeName</button>
        {/* render one time in creation phase
        after that updation phase
        than render one time */}
        <Children/>
        </>
    )
}