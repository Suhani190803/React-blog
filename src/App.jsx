
import User from "./User";
import Wrapper from "./Wrapper";

function App(){
     return(
      <div>
        <h1>
          Props in React-Js
        </h1>
        <Wrapper color ="yellow">
          <h1>hiii everyone</h1>
        </Wrapper>
        <Wrapper color= "orange">
          <h1>Hello Guys</h1>
        </Wrapper>
        <Wrapper>
          <h1>Nice to meet u guys</h1>
          <h2 style = {{color :"green"}}>How are u all...!</h2>
        </Wrapper>
        
        {/* <User name = "Anil Kapoor"/>
        <User name = "Samiksha" />
        <User name ="Sheru" />
        <User />
        <User />
        <User /> */}
      </div>
     )
    
  }
  
export default App ;
