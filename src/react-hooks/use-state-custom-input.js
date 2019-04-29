import React, {useState} from 'react';

const useInput = initialState => {
    const [value, setValue] = useState('');

    return {value, onChange: e => setValue(e.target.value)};
};

function UseStateCustomInput() {
    const email = useInput('');
    const password = useInput('');
    const valid = email.value && password.value;

    const submit = () => console.log(`Submitted user name (${email.value}), email (${password.value})`);

    return (
        <div>
            <h3>A simple form</h3>
            <input type="text" placeholder="email..." {...email} /><br/>
            <input type="password" placeholder="password..." {...password} /><br/>
            <button disabled={!valid} onClick={submit}>submit</button>
        </div>
    );
}

export default UseStateCustomInput;
