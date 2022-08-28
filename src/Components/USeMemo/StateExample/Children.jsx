import { memo } from "react"

const Children=()=>{
    console.log('children render')
    return(
        <div>Children</div>
    )
}
export default memo(Children)