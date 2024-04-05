
const StatefulForm = () => {
    const handleSubmit = (e) =>{
        console.log(e)
        console.log(e.target)
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

export default StatefulForm;
//46-2----3min