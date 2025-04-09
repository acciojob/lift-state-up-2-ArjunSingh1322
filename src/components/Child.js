 import React from "react";

const Child = ({x})=>{

    return(
<div className="child" style={{backgroundColor:"brown"}}>
    <h1>Child Component</h1>
    <form>
    <input type = "text"
    placeholder="Enter Text"
    onChange={(e)=>x(e.target.value)}
    />
    </form>
</div>


    )
}
export default Child