import React from "react";
function StateRandom(){
    const [value,setValue] = React.useState(100)
    const getValue = () => {
        setValue(Math.random());
    };
    return (
        <div>
            <input type="button" value="Get number"  onClick={getValue} />
            
          <div style={{color:'red',fontSize: '2rem',borderWidth: 5,borderStyle: 'double',borderColor: 'darkgoldenrod'}}>
           Out Put : {value}
          </div>
        </div>
      )
}

export default StateRandom