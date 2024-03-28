function handleFormSubmit(){
    event.preventDefault();
    console.log("form was Submitted")
}
function Form(){
    return(
        <form onSubmit={handleFormSubmit}>
            <button>Submit</button>
        </form>
    )

}
export default Form;
