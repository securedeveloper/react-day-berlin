import React, {useContext} from 'react';
import useInput from './use-input';
import {UserContext} from './user-manager';

function LoginForm() {
    const {setUser} = useContext(UserContext);

    const name = useInput('');
    const surname = useInput('');

    const submit = () => {
        const user = {name: name.value, surname: surname.value};

        console.info('submitting data', user);

        setUser(user);
    };

    return (
        <div>
            <input placeholder="name" type="text" {...name} />
            <input placeholder="surname" type="text" {...surname} />
            <button onClick={submit}> submit</button>
        </div>
    );
}

export default LoginForm;
