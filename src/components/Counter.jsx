import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {

    const [count, setCount] = useState(0)

    const handleSubmit = () => {
        setCount(count+1)
    }

    return (
        <div className='counter-container'>
            <p id='para'>You have clicked { count} Times</p>
            {/* <button onClick={()=> {setCount(count+1)}} id='btn'>Click me</button> */}
            <button onClick={handleSubmit} id='btn'>Click me</button>
                        <button onClick={handleSubmit} id='btn'>Click me</button>
        </div>
    )
}

export default Counter