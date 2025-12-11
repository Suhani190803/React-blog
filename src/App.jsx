import { useState } from "react";



function App(){
    const [gender,setGender] =useState('female');
    return(
      <div>
        <h1>Handle Ratio and Dropdown</h1>
        <h4>Select Gender</h4>
        <input type ="radio" onChange={(event)=>setGender(event.target.value)} name="gender" 
        value={"male"} checked={gender==female} id ="male" /> 
        <lable htmlFor="male">Male</lable>
        <input type ="radio" onChange={(event)=>setGender(event.target.value)} name="gender"  
        value={"female"}  checked={gender==female} id ="female" />
        <lable htmlFor="female">Female</lable> 

        <h2>Selected Gender :{gender}</h2>


        <br/><br/><br/>

      <h4>Select City</h4>
      <select>
        <option value ="Banglore"> Banglore</option>
      </select>
        
      </div>
      
    )
     
  }
  
export default App ;
