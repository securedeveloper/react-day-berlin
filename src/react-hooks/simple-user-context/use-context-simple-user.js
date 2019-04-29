import React from 'react';
import Header from "./header";
import Footer from "./footer";

export const UserContext = React.createContext({});

const user = {
    name: 'John',
    surname: 'Lennon'
};

function SimpleUser() {
    return (
        <div style={{backgroundColor: "yellow"}}>
            <UserContext.Provider value={user}>
                <h3>A context example</h3>
                <Header/>
                <Footer/>
            </UserContext.Provider>
        </div>
    );
}

export default SimpleUser;
