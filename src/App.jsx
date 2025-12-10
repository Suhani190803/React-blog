import Counter from "./Counter";
import { useState } from "react";
function App(){
    const [fruit,setFruit] =useState("Apple");
    const handelFruit =()=>{
      setFruit("Banana")
    }
     return(
      <div>
        <h1>
          State in React Js
        </h1>
        <h2>{fruit}</h2>
        <button onClick={handelFruit}>Change Fruit Name</button>
        <Counter/>
      </div>
     )
  }
  
export default App ;
