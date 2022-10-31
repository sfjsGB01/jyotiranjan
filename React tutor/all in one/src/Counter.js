import React from "react";

function Counter() {
    const [value,setValue] = React.useState(0)

    const doDecrement = () => {
        setValue(value-1)
    }
    const doIncrement = () => {
        setValue(value+1)
    }
    return (
        <div>
            <input type="button" value="Increment" onClick={doIncrement}/>
            &nbsp;
            <input type="button" value="Decrement" onClick={doDecrement}/>
            <br />
            <br />
            <div style={{ fontSize: '30px' }}>
                Counter : {value}
            </div>
        </div>
    )
}

export default Counter