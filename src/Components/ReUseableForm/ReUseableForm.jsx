//46-5 (Advanced) Reusable Form Using Props And Children

const ReUseableForm = ({FormTitle,handleSubmit , SubmitBtnText='Submt',children}) => {

    // const handleSubmit = (e) =>{
    //     e.preventDefault()
    // }

    const handleLocalSubmit = (e) =>{
        e.preventDefault();
        const data = {
            name : e.target.name.value,
            email : e.target.email.value,
            passworddd : e.target.password.value
        }
        handleSubmit(data)
    }

    return (
        <div>
            {/* <h2>Sign Up</h2> */}
            {/* <h2>{FormTitle}</h2> */}
            <h2>{children}</h2>
            {/* <form onSubmit={handleSubmit}> */}
            <form onSubmit={handleLocalSubmit}>
                {/* <input type="text" /> */}
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                {/* <input type="password" name="password" /> */}
                <input type="password" name="password" id="" />
                <br />
                {/* <button>Submit</button> */}
                <input type="submit" value={SubmitBtnText} />
            </form>
            
        </div>
    );
};

export default ReUseableForm;