import { useState } from "react"
import Childrenn from "./Childrenn"

export default function Parentt() {
    const [count, setCount] = useState(0)
    const [userInfo, setName] = useState({
        user: 'abhi',
        role: 'student'
    })
    console.log('parent')
    return (
        <>
            <div>Name:{userInfo.user}</div>
            <button onClick={() => setName({ ...userInfo, user:'abhishek' })}>ChangeName</button>
            <br />
            <br />
            <div>count:{count}</div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <Childrenn name={userInfo.user} />
        </>
    )
}