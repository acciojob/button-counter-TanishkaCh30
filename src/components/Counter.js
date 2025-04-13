import React,{useState} from "react";



const Counter = () =>{

   let[count,setCount] = useState(0);

   function handleCount(){

    setCount(count+1)
   }
  

    return (

        <div>
            <p>{`Button clicked ${count} times`}</p>
            <button onClick={handleCount}>Click me</button>
        </div>
    )
}

export default Counter;