import { useState } from "react";
import College from "./College";
import Student from "./Student";
import User1 from "./User1";


function App(){
  //  let userName =  "Salman Khan" ;
  //  let age = 30;
  //  let email = "Salman324@google.com"

  let userObject = {
    name : "Salman Khan",
    age : "45",
    email : "khan3454@test.com"
  }
  let userObject2 = {
    name : "Priyanka",
    age : "67",
    email : "anka2323@test.com"
  }
  let userObject3 = {
    name : "Aliya",
    age : "32",
    email : "aliya5775@test.com"
  }

  let collegeNames =["IIT", "NIT","DU","MIT"]
    const[student,setStudent] = useState("Batuk")
  
    return(
      <div>
        <h1>Props in React Js</h1>
        <College name = {collegeNames[0]}/>
        {/* <College name = {collegeNames[1]}/> */}
        {/* <College name = {collegeNames[2]}/> */}
        {/* <College name = {collegeNames[3]}/> */}
      
        {/* <User1 name={userName} age ={age} email = {email}  />  */}
        <User1 user = {userObject}/>
        <User1 user = {userObject2}/>
        <User1 user = {userObject3}/>

        { student && <Student name = {student}/>}
        <button onClick={()=>setStudent("Batuk")}>Update student name</button>
        
      </div>
    )

  }
  
export default App ;
