import Login , {Profile,Setting, UserKey} from './UserComponent'
function App(){
  return (
    <div>  
      
      <h1>Importing nad Exporting Components</h1>
      <h1>Code Step by Step</h1>
      <h1>{UserKey}</h1>
      
      <Login/>
      <Profile/>
      <Setting/>
    </div>
    
  )
}
export default App ;
