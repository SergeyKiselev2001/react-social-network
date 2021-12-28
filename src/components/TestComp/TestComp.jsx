import { useEffect } from "react";
import { useState } from "react";


const TestComp = () => {

    const [count, setCount] = useState(0);
    const [name, setName] = useState('Marry');
    useEffect(()=>{
     setCount(count + 1); 
    }, [name])


    const changeName = e => {
      setName(e.target.value);
    }



    return (
      <div>

        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
        <input type="text" onChange={changeName} value={name}/>
      </div>
    );
}


export default TestComp;