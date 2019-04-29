import React from 'react';
import UserManager from "./user-manager";
import Header from "./header";
import LoginForm from "./login-form";

export default () => {
    return (
        <div>
            <UserManager>
                <h3>Dynamic context example</h3>
                <Header/>
                <LoginForm/>
            </UserManager>
        </div>
    );
}
