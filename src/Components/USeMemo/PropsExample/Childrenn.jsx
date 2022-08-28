import { memo } from "react"

function Childrenn({name}) {
    console.log('childern')
    return (
        <>
            <h4>Children</h4>
            <div>USerName:{name}</div>
        </>
    )
}
export default memo(Childrenn)