import React from "react";
import Child1 from "./Child1";
const Parent=({name}) => {
  return (
    <div>   
        <h1>Parent Component</h1>
        
        <Child1 name={name}/>
    </div>
  );
}
export default Parent;