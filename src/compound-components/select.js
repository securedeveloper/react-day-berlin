import React, {useState} from 'react';

export const SelectContext = React.createContext(null);

const useSelect = initialState => {
    const [expanded, setExpanded] = useState(initialState);
    const [selectedOption, setSelected] = useState(initialState);

    //can do more logic here
    const onExpand = () => setExpanded(true);
    const onSelectOption = option => {
        setSelected(option);
        setExpanded(false);
    };

    return {expanded, onExpand, selectedOption, onSelectOption};
};

const useOptionRegister = initialOption => {
    const [options, setOptions] = useState(initialOption);
    const registerOption = option => setOptions([...options, option])

    const unregisterOption = option => setOptions(options => options.filter(item => item.value !== option.value));

    return {options, registerOption, unregisterOption};
};

export default ({children}) => {
    const selectState = useSelect(false);
    const selectedOption = selectState.selectedOption ? [selectState.selectedOption] : [];
    const optionRegister = useOptionRegister(selectedOption);

    if (selectState.expanded) {
        return (
            <SelectContext.Provider value={{...selectState, ...optionRegister}}>
                {children}
            </SelectContext.Provider>
        );
    }

    return (
        <div onClick={selectState.onExpand}>
            {selectState.selectedOption ? selectState.selectedOption.children : 'Pick one'}
        </div>
    );
}
