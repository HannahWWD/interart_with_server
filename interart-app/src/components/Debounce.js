import { useState, useEffect } from 'react'

export default function Debounce(value,delay) {
    const [debounceVal, setDebounceVal] = useState(value)

    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebounceVal(value)
        },delay)
        return ()=>clearTimeout(handler)
    },[value,delay])
    return debounceVal
       
}
