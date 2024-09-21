import React, { useState } from "react";
import '../Component/Count.css'

const CountTask: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    
    const handleIncrement = () =>{
        setCount(prevcount => prevcount +1 );
    }

    const handleDecriment = () => {
        setCount(prevcount => (prevcount > 0 ? prevcount -1 : 0));
    }

    const handleresetCount = () => {
        setCount(0);
    }

    return(
        <>
            <div className="Counter">
                <h1>Simple Counter</h1>
                <div className="App">
                    <h1>{count}</h1>
                    <button onClick={handleIncrement} > + </button>
                    <button onClick={handleDecriment} disabled={count === 0}> - </button>
                    <button onClick={handleresetCount}>Reset</button>
                </div>

            </div>
        </>
    )
}
export default CountTask;