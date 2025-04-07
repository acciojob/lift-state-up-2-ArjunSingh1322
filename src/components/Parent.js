import React,{useState} from "react";
import Child from "./Child"

const Parent = ()=>{
let [value,setvalue] = useState()


    return(
<div style = {{backgroundColor:"green"}}>
    <h1>Parent Component</h1>
    <p style={{color:"red"}}>{value}</p>
    <Child 
     x = {setvalue}/>
   
</div>

    )
}

export default Parent

