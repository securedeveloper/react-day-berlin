import React, {useContext} from 'react';
import {UserContext} from "./use-context-simple-user";

function Footer() {
    const {name} = useContext(UserContext);

    return (
        <div>
            The surname is {name}
        </div>
    );
}

export default Footer;
