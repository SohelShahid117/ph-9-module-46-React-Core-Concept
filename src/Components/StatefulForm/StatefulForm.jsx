//46-2 Form With State To Get Value And Set Default Value

import { useState } from "react";

const StatefulForm = () => {

    const [email,setEmail] = useState(null);
    const [passwordd,setPasswordd] = useState(null);
    const [name,setName] = useState(null);

    const [error,setError] = useState('')


    const handleSubmit = (e) =>{
        // console.log(e)
        // console.log(e.target)
        e.preventDefault();
        // console.log(email);
        // console.log(passwordd);
        // console.log(name)

        if(passwordd.length<6){
            setError('min password should be 6 charecter');
        }


        console.log(email,passwordd,name)
        console.log(error);
    }

    const handleEmailChange = (e) =>{
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.value)
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) =>{
        // console.log(e)
        setPasswordd(e.target.value)
    }

    const handlNameChange = (e) =>{
        setName(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input type="text" /> */}
                <input
                    onChange={handlNameChange}
                    type="text" name="name" />
                <br />

                <input
                    onChange={handleEmailChange}
                    type="email" name="email" />
                <br />

                {/* <input type="password" name="password" /> */}
                <input
                    onChange={handlePasswordChange}
                    type="password" name="password" id="" required />
                <br />

                {/* <button>Submit</button> */}
                <input type="submit" value="Submittt" />

                {
                    error && <p>{error}</p>
                }
            </form>
            
        </div>
    );
};

export default StatefulForm;
//46-2----3min