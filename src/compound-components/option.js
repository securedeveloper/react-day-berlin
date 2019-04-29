import React, {useContext, useEffect} from 'react';
import {SelectContext} from "./select";

export default ({children, value}) => {
    const {selectedOption, onSelectOption, registerOption, unregisterOption} = useContext(SelectContext);
    const isActive = selectedOption && selectedOption.value === value;

    useEffect(() => {
        registerOption({value, children});

        return () => unregisterOption({value, children});
    }, []);

    return (
        <div
            className='option'
            style={{
                fontWeight: isActive ? 'bold' : 'normal',
                color: isActive ? '#ffffff' : 'rgba(255,255,255,0.7)'
            }}
            onClick={() => onSelectOption({value, children})}>
            {children}
        </div>
    );
}
