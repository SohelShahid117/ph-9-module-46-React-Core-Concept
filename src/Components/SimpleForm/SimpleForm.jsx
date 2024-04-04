
const SimpleForm = () => {
    // const handleSubmit = () =>{
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e)
        // console.log('form submitted')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" />
                <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="Submittt" />
            </form>
            
        </div>
    );
};

export default SimpleForm;

//7 min