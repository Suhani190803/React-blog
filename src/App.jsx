
function App(){
  const name = "Ramesh";
  const userObj ={
    name : "Sunil Datt",
    email : "Sunil@google.com",
    password : "1234",
    age : 25
  }
  const userArray =['Saktiman','Ironman','Kilwish']
  let x=10;
  let y=20
  let path = "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  
  function fruit(){
    return "Apple"
    
  }
  function sum(a,b){
    return a+b
  }
  function operation(a,b,op){
    if (op =="+") {
      return a+b;
    }else if(op=="-"){
      return a-b;
    }else{
      return a*b
    }
     
  }
  return(
    <div>
      <h1>JSX with Curly Braces</h1>
      <h2>{name?name:"user not found"}</h2>
      <h3>{x+y}</h3>
      <h3>{fruit()}</h3>
      <h4>{sum(400,500)}</h4>
      <h4>{operation(10,20,"-")}</h4>
      <h1>{userObj.password}</h1>
      <h1>{userArray[1]}</h1>
      <input type ="text" value = {name} id ={name}/>
      <img 
      src= {path}
      />
      
      
    </div>
  )


  
}
export default App ;
