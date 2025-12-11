import { useState } from "react";



function App(){
  const [value ,setValue] = useState("Shiv bhole")
     return(
      <div>
        <h1>
          Get Input  field Value
        </h1>
        <input type="text" value={value} onChange={(event)=>setValue(event.target.value)} placeholder="Enter User Name"/>
        <h1>{value}</h1>
        <button onClick = {()=>setValue("")}>
          Clear Value
        </button>
        </div>
     )
  }
  
export default App ;
