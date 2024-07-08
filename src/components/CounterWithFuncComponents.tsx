import React, { useState } from 'react';

const CounterWithFuncComponents = () => {
    // Declare state using the useState hook
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            {count}
        </button>
    );
}

export default CounterWithFuncComponents;
