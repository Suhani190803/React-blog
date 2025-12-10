
function App(){
    function callFun(){
      alert ("function called")
    }
    const  fruit=(name)=>{
      alert(name)
    }
    return(
      <div>
        <h1>Event and function call </h1>
        <button onClick={()=>fruit("Apple")}>Apple</button>
          {/* not function call only definition   */}
          <button onClick={()=>fruit("Banana")}>Banana</button>
      </div>
    )
     
  }
  
export default App ;
