import React from 'react';
import './style.css';

//components
import Select from './select';
import Option from './option';

export default () => {
    return (
        <div>
            <h3>Select and option</h3>
            <Select>
                <Option value="blue">Blue</Option>
                <Option value="red"> Red </Option>
                <Option value="white"> White </Option>
            </Select>
        </div>
    );
}
