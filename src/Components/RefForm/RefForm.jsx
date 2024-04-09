//46-3 Explore Ref And Controlled And Uncontrolled Components

import { useEffect, useRef } from "react";

const RefForm = () => {
    const refName = useRef(null);
    const refEmail = useRef(null);
    const refPassword = useRef(null);


    useEffect(()=>{
        refName.current.focus();
    },[])

    
    const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(refName);
        // console.log(refName.current);
        console.log(refName.current.value);
        console.log(refEmail.current.value);
        console.log(refPassword.current.value);
    }

 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input type="text" /> */}
                <input ref={refName} type="text" name="name" />
                <br />

                <input ref={refEmail} defaultValue={'sohelshahid09@gmail.com'} type="email" name="email" />
                <br />

                {/* <input type="password" name="password" /> */}
                <input ref={refPassword} type="password" name="password" id="" />
                <br />

                {/* <button>Submit</button> */}
                <input type="submit" value="Submittt" />
            </form>
        </div>
    );
};

export default RefForm;