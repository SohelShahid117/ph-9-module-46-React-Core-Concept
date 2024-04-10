//46-4 Custom Hook And Create Your First Custom Hook
// import { useState } from "react";
import useInputState from './../../hooks/useInputState';

const HookForm = () => {

    // const [] = useState()

    const emailState = useInputState('sohelshahid09@gmail.com')

    // const [name,handleChange] = useInputState();

    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log('form data',name)
        console.log('form data',emailState.value)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input type="text" /> */}
                {/* <input value={name} onChange={handleChange} type="text" name="name" /> */}
                <br />
                <input {...emailState} type="email" name="email" />
                <br />
                {/* <input type="password" name="password" /> */}
                <input type="password" name="password" id="" />
                <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submittt" />
            </form>
        </div>
    );
};

export default HookForm;