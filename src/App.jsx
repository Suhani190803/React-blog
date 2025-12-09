import Header from "./Header"
function App(){
  return (
    <div>  
      <Header />
      <h1>Hello</h1>
      <h1>Code Step by Step</h1>
      <Fruit/>
      <Colors/>
    </div>
    
  )
}

function Fruit(){
 return (
 <h1>Apple</h1>
 )
}
function Colors(){
 return (
 <h1>Pink</h1>
 )
}
export default App