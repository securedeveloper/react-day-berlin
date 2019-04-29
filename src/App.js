import React from 'react';
import './App.css';
import UseStateToggleCounter from "./react-hooks/use-state-toggle-counter";
import Counter from "./react-hooks/use-state-simple-counter";
import WindowMeasures from "./react-hooks/use-effect-window-measures";
import UseStateCustomInput from "./react-hooks/use-state-custom-input";
import SimpleUser from "./react-hooks/simple-user-context/use-context-simple-user";
import UserManager from "./react-hooks/user-manager/user-manager";
import Select from "./compound-components/select";
import Option from "./compound-components/option";

function App() {
    const list = [
        "Counter (useState)",
        "Toggle Counter (useState)",
        "Window Measures (useEffect)",
        "Custom useInput (useState)",
        "Simple User (useContext)",
        "UserManager - Dynamic Context (useContext)",
        "Select and option (Compound Component)"
    ];

    return (
        <div className="App">
            <ul>
                {list.map(item => <li key={item}>{item}</li>)}
            </ul>
            <Counter/>
            <UseStateToggleCounter/>
            <WindowMeasures/>
            <UseStateCustomInput/>
            <SimpleUser/>
            <UserManager/>
            <Select>
                <Option value="orange">Oranges</Option>
                <Option value="apple">Apple</Option>
                <Option value="banana">Banana</Option>
            </Select>
        </div>
    );
}

export default App;
