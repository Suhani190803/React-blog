function ToDo(){
    function callFun(){
        alert("function called")
    }
    return(
        <div>
            Hello ToDo component
            <h1>Anil Kapoor</h1>
            <ul>
                <li>invent new traffic lights</li>
                <li>Reverse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
            <button onClick={callFun}>Click Me</button>
        </div>
    )
}

export default ToDo ;