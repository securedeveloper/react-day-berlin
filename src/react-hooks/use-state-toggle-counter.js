import React, {useState} from 'react';
import Counter from "./use-state-simple-counter";

const useToggle = initialState => {
    const [visible, setVisible] = useState(initialState);
    const toggle = () => setVisible(!visible);

    return {visible, toggle};
};

function UseStateToggleCounter() {
    const {visible, toggle} = useToggle(false);

    return (
        <div>
            <div>
                Toggle counter visibility
            </div>
            <div>
                <button onClick={toggle}>{visible ? 'Hide' : 'Show'} counter</button>
            </div>
            {visible && <Counter/>}
        </div>
    );
}

export default UseStateToggleCounter;
