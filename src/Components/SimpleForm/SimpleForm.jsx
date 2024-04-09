//46-1 Handle Form With OnSubmit And Access Field Data
const SimpleForm = () => {
    // const handleSubmit = () =>{
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e)
        console.log(e.target)
        console.log(e.target.name)
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.password.value)
        // console.log('form submitted')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <input type="text" /> */}
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
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

export default SimpleForm;

//7 min