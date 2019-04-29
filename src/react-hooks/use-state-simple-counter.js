import React, {useState} from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);
    const increaseCounter = () => setCounter(counter => counter + 1);
    const decreaseCounter = () => setCounter(counter => counter - 1);

    return (
        <div>
            <h3>Counter Solution</h3>
            <div>Counter value is {counter}</div>
            <div>
                <button onClick={increaseCounter}>increase</button>
                <button onClick={decreaseCounter}>decrease</button>
            </div>
        </div>
    );
}

export default Counter;
