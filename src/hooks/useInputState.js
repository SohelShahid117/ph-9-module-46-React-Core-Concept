//46-4 Custom Hook And Create Your First Custom Hook
import { useState } from "react"

const useInputState = (defaultValue = null) => {
    
    const [value,setValue] = useState(defaultValue)

    // const handleChange = (val) => {
    //     setValue(val)
    // }
    
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return [value,handleChange]
}

export default useInputState;