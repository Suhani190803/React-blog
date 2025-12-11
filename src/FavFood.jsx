import { useState } from "react";

function FavFood(){
    const[food,setFood] = useState([]);
    const handleFood = (event)=>{
       console.log(event.target.value , event.target.checked);
       if(event.target.checked){
        setFood([...food,event.target.value])
       }else{
        setFood([...food.filter((item)=> item!=event.target.value)])
       }
       
    }
    return(
        <div>
            <h2> Select your fav Food</h2>
            <input  onChange ={handleFood} type="checkbox" id="Panipuri" value="Panipuri"/>
            <lable htmlFor ="Panipuri">Panipuri</lable>
             <br/>
             <br/>
            <input onChange ={handleFood} type="checkbox" id="Pizza" value="Pizza" />
            <lable htmlFor ="Pizza">Pizza</lable>
              <br/>
             <br/>
            <input  onChange ={handleFood} type="checkbox" id="Halwa" value="Halwa"/>
            <lable htmlFor ="Halwa">Halwa</lable>
              <br/>
             <br/>
            <input onChange ={handleFood} type="checkbox" id="Burger" value="Burger"/>
            <lable htmlFor ="Burger">Burger</lable>
             <br/>
             <br/>
            <input onChange ={handleFood} type="checkbox" id="Home Food" value="Home Food"/>
            <lable htmlFor ="Home Food">Home Food</lable>
            <h1>{food.toString()}</h1>
        </div>
        
    )
}
export default FavFood;