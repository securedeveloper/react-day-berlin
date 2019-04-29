import React, {useContext} from 'react';
import {UserContext} from "./use-context-simple-user";

function Header() {
    const {name} = useContext(UserContext);

    return (
        <div>
            The name is {name}
        </div>
    );
}

export default Header;
