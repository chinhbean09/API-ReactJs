import { useState } from "react"

export const Counter = () => {
    //count la gia tri cua state ban dau la 0, vi gia tri no la 0 nen js tu hieu no number
    //setCount la ham xet lai gia tri state, tai sao khong dung count = ma lai dung setCount
    const [count,setCount] = useState(0)
    //ham onClick cho phep ban truyen vao 1 tham so event de ghi lai thong tin cua su kien
    return <div>{count} <button onClick={(event) => setCount(count + 1)}>Click me to raise count by 1 </button></div>
}