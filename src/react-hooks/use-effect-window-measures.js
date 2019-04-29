import React, {useEffect, useState} from 'react';

const useMeasureWindow = initialState => {
    const [measures, setMeasures] = useState(initialState);
    const resizeHandler = () => setMeasures({width: window.innerWidth, height: window.innerHeight});

    useEffect(() => {
        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, [measures]);

    return {...measures};
};

function WindowMeasures() {
    const {width, height} = useMeasureWindow({width: window.innerWidth, height: window.innerHeight});

    return (
        <div>
            <h3>Window measurements</h3>
            <div>The width is {width}</div>
            <div>The height is {height}</div>
        </div>
    );
}

export default WindowMeasures;
